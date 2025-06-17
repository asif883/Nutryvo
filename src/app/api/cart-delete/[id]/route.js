import { mongoDB } from "@/lib/mongoDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const DELETE = async (req, { params }) => {
  const id = await params.id;

  try {
    const db = await mongoDB();
    const query = { _id: new ObjectId(id) };

    const result = await db.collection("cartItems").deleteOne(query);

    if (result.deletedCount === 1) {
      return NextResponse.json({ message: "Item deleted successfully!" }, { status: 200 });
    } else {
      return NextResponse.json({ message: "Item not found!" }, { status: 404 });
    }
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
};
