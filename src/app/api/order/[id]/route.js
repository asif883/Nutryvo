import { mongoDB } from "@/lib/mongoDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const PATCH = async (req, { params }) => {
  const { id } = params;
  const { status } = await req.json();

  try {
    const db = await mongoDB();

    const result = await db.collection("orders").findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: { status } },
      { returnDocument: "after" } // return updated doc
    );

    return NextResponse.json({ success: true, data: result.value });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: "Failed to update status" }, { status: 500 });
  }
};
