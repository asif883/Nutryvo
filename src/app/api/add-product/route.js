import { mongoDB } from "@/lib/mongoDB"
import { NextResponse } from "next/server"

export const POST = async (req)=>{
    const productInfo = await req.json()

    try {
        const db = await mongoDB()
        const productCollection = db.collection('products')
        const result = await productCollection.insertOne(productInfo)
        return NextResponse.json(result)
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Something Went wrong" }, { status: 500 });
    }
}