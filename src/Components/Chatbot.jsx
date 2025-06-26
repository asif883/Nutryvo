'use client'
import React, { useState, useRef, useEffect } from 'react'

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef(null)


  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = async () => {
    if (!input.trim()) return

    const userText = input
    setMessages((prev) => [...prev, { text: userText, from: 'user' }])
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        body: JSON.stringify({ message: userText }),
      })

      if (!res.ok) throw new Error(`Server error: ${res.status}`)

      const reader = res.body?.getReader()
      const decoder = new TextDecoder()
      let botText = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const chunk = decoder.decode(value, { stream: true })
        const lines = chunk.split('\n').filter((line) => line.trim() !== '')

        for (const line of lines) {
          if (line.startsWith('data:')) {
            const json = line.replace('data: ', '').trim()
            if (json === '[DONE]') {
              setLoading(false)
              return
            }
            try {
              const parsed = JSON.parse(json)
              const content = parsed.choices?.[0]?.delta?.content
              if (content) {
                botText += content
                setMessages((prev) => {
                  if (prev.length === 0 || prev[prev.length - 1].from !== 'bot') {
                 
                    return [...prev, { text: botText, from: 'bot' }]
                  }
                
                  const updated = [...prev]
                  updated[updated.length - 1] = { text: botText, from: 'bot' }
                  return updated
                })
              }
            } catch (e) {
            }
          }
        }
      }
      setLoading(false)
    } catch (err) {
      console.error(err)
      setLoading(false)
    }
  }

  return (
    <>
     
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg z-[9999] cursor-pointer"
          aria-label="Open Chat"
        >
          💬
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-0 right-0 sm:bottom-6 sm:right-6 w-full sm:w-96 h-[90vh] sm:h-[450px] bg-white rounded-t-lg sm:rounded-lg shadow-xl flex flex-col overflow-hidden z-[9999] border-t sm:border border-green-200">
          {/* Header */}
          <div className="bg-green-600 text-white p-4 flex justify-between items-center">
            <h3 className="font-semibold text-lg">Nutryvo AI Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-xl font-bold cursor-pointer"
              aria-label="Close Chat"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-2 bg-green-50 text-sm">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`${
                  m.from === 'user' ? 'text-right text-green-700' : 'text-left text-gray-800'
                }`}
              >
                {m.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-2 border-t border-green-200 flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Ask something..."
              className="flex-grow border border-green-300 rounded-l-md px-3 py-2 focus:outline-none text-sm"
              disabled={loading}
            />
            <button
              onClick={sendMessage}
              className="bg-green-600 hover:bg-green-700 text-white px-4 rounded-r-md text-sm"
              disabled={loading}
            >
              {loading ? '...' : 'Send'}
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default ChatbotWidget
