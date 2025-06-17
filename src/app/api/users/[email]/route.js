import { mongoDB } from "@/lib/mongoDB"
import { NextResponse } from "next/server"

export const GET = async (req, { params }) => {
   const email = await params.email;

   try {
       const db = await mongoDB()
       const userCollection = await db.collection("users")

       const user = await userCollection.findOne({email})

       if(!user){
        return new NextResponse(JSON.stringify({ message : "user not found" }) , { status: 404 }
        )
       }

       return NextResponse.json(user)

   } catch (error) {
     console.error("Error fetching user:", error);
   }
}