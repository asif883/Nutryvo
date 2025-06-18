import { mongoDB } from "@/lib/mongoDB"
import { NextResponse } from "next/server"

export const POST = async (req) =>{
    const {address , userEmail} = await req.json() 

    try {
        const db = await mongoDB()
        const cartItem = await db.collection("cartItems").find({buyerEmail: userEmail}).toArray()
        if(cartItem.length === 0){
            return NextResponse.json({message : "cart empty"})
        }
        const orderCollection = db.collection("orders")

        const newOrder ={
            userEmail,
            address,
            items: cartItem,
            orderDate : new Date(),
            status : "pending"
        }
        const order = await orderCollection.insertOne(newOrder)
        const removeCart = await db.collection("cartItems").deleteMany({ buyerEmail: userEmail })

        return NextResponse.json({
        message: "Order placed successfully",
        order,
        removeCart,
        })
    } catch (error) {
      console.log(error);   
    }
}