import { mongoDB } from "@/lib/mongoDB"


export const POST = async (request) => {
    const newUser = await request.json()
    try {
        const db = await mongoDB()
        const userCollection = db.collection('users')
        const exist = await userCollection.findOne({ email : newUser.email})
        if(exist) {
            return Response.json({ message : "user exists"} , {status : 304})
        }
        const res = await userCollection.insertOne(newUser)
        return Response.json({ message : "User Created"} , {status : 200})
    } catch (error) {
        return Response.json({ message : "Something Went wrong"} , {status : 500})
        
    }
}