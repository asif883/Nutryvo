import { mongoDB } from "@/lib/mongoDB"
import { NextResponse } from "next/server"

export const GET = async () =>{
    try {
        const db =await mongoDB()
        const products = await db.collection("products").find().toArray()
        return NextResponse.json(products)
        
    } catch (error) {
        console.log(error);
        return new Response(
        JSON.stringify({ message: "Failed to fetch product", error }),
        { status: 500 });
    }
}