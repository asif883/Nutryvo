import { mongoDB } from "@/lib/mongoDB";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");

  if (!email) {
    return NextResponse.json({ message: "Email is required" }, { status: 400 });
  }

  try {
    const db = await mongoDB();
    const orders = await db.collection("orders").find({ userEmail: email }).sort({ orderDate: -1 }).toArray();
    return NextResponse.json(orders);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Error fetching orders" }, { status: 500 });
  }
};
