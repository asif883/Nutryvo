import { mongoDB } from "@/lib/mongoDB"
import { NextResponse } from "next/server"

export const GET = async () => {
    try {
        const db = await mongoDB()
        const pendingOrders = await db.collection("orders").find().sort({orderDate : -1}).toArray()
        return NextResponse.json(pendingOrders)
    } catch (error) {
       console.log(error);   
    }
}