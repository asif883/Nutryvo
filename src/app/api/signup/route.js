import { mongoDB } from "@/lib/mongoDB";
import bcrypt from "bcryptjs";

export const POST = async (request) => {
  const newUser = await request.json();

  try {
    const db = await mongoDB();
    const userCollection = db.collection("users");

    const exist = await userCollection.findOne({ email: newUser.email });
    if (exist) {
      return Response.json({ message: "User already exists" }, { status: 409 });
    }

    // ✅ Hash the password before storing
    const hashedPassword = await bcrypt.hash(newUser.password, 10);

    const res = await userCollection.insertOne({
      ...newUser,
      password: hashedPassword,
    });

    return Response.json({ message: "User Created" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ message: "Something Went wrong" }, { status: 500 });
  }
};
