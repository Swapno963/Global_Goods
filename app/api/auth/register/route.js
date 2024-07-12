import { userModel } from "@/models/user_models";
import dbConnect from "@/service/mongo";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { name, email, password, role } = await request.json();

  console.log(name, email, password, role);

  await dbConnect();

  const newUser = {
    name,
    email,
    password,
    role,
  };

  console.log(newUser);

  try {
    await userModel.create(newUser);
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
