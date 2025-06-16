import { mongoDB } from "@/lib/mongoDB"
import { NextResponse } from "next/server"

export const GET = async () =>{
    try {
        const db = await mongoDB()
        const userCollection = db.collection("users")

        const users = await userCollection.find().toArray()
        return NextResponse.json(users);
    } catch (error) {
        console.error("Error fetching users:", error);

        return new Response(
        JSON.stringify({ message: "Failed to fetch users", error }),
        { status: 500 });
    }
}