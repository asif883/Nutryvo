import { mongoDB } from "@/lib/mongoDB";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const cartInfo = await req.json();

  try {
    const db = await mongoDB();
    const cartCollection = db.collection("cartItems");

    const exist = await cartCollection.findOne({
      buyerEmail: cartInfo.buyerEmail,
      name: cartInfo.name,
    });

    if (exist) {
      return NextResponse.json(
        { message: "Product already exists in your cart!" },
        { status: 409 }
      );
    }

    const cartItem = await cartCollection.insertOne(cartInfo);
    return NextResponse.json(cartItem, { status: 201 });

  } catch (error) {
    console.error("Cart POST Error:", error);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
};
