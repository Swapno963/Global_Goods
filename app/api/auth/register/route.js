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
    const existingUser = await userModel.findOne({ email }); // it will return null if now user with this email founc
    console.log("existing user :", existingUser);
    if (existingUser) {
      // already exist a user with this email
      return NextResponse.json(
        { message: "Email already exists" },
        { status: 409 }
      );
    } else {
      await userModel.create(newUser);
      return NextResponse.json(
        { message: "User has been created" },
        { status: 201 }
      );
    }
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
