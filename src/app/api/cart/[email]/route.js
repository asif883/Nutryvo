import { mongoDB } from "@/lib/mongoDB"
import { NextResponse } from "next/server";

export const GET = async (req , {params}) => {
    const email = params.email

    try {
        const db = await mongoDB()
        const cartItem = await db.collection("cartItems").find({ buyerEmail: email}).toArray()
        
        return NextResponse.json(cartItem)
    } catch (error) {
     console.log(error);   
    }
}