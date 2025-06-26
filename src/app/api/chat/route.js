import { NextResponse } from "next/server"

export const runtime = 'edge'

export async function POST(req) {
  try {
    const { message } = await req.json()

    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://nutryvo.vercel.app',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        stream: true,
        messages: [
          { role: 'system', content: 'You are a helpful nutrition assistant.' },
          { role: 'user', content: message },
        ],
      }),
    })

    if (!groqRes.ok) {
      const errorText = await groqRes.text()
      console.error(' OpenRouter error:', errorText)
      return new NextResponse('Failed to fetch from OpenRouter', { status: 500 })
    }

    const encoder = new TextEncoder()
    const decoder = new TextDecoder()

    const stream = new ReadableStream({
      async start(controller) {
        const reader = groqRes.body.getReader()
        while (true) {
          const { done, value } = await reader.read()
          if (done) break
          const chunk = decoder.decode(value)
          const lines = chunk.split('\n').filter((line) => line.trim() !== '')

          for (const line of lines) {
            if (line.startsWith('data:')) {
              const json = line.replace('data: ', '')
              if (json === '[DONE]') {
                controller.close()
                return
              }
              controller.enqueue(encoder.encode(`${line}\n`))
            }
          }
        }
      },
    })

    return new NextResponse(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
    })
  } catch (err) {
    console.error(' Internal server error:', err)
    return new NextResponse('Internal error', { status: 500 })
  }
}
