import { NextResponse } from "next/server";

import { cartModel } from "@/models/Cart_model";
import dbConnect from "@/service/mongo";
import mongoose from "mongoose";

export const POST = async (request) => {
  const { userEmail, productId, quantity } = await request.json();

  // console.log(userEmail, productId);

  await dbConnect();

  const payload = {
    productId: new mongoose.Types.ObjectId(productId),
    userEmail,
    quantity: parseInt(quantity),
  };

  console.log(payload);

  try {
    await cartModel.create(payload);
    return new NextResponse("A New Cart item has been Created", {
      status: 201,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
