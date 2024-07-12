import { NextResponse } from "next/server";

import { accountInfoModel } from "@/models/account_info_model";
import dbConnect from "@/service/mongo";
export const POST = async (request) => {
  const { accountInfo } = await request.json();

  console.log("account info", accountInfo);

  await dbConnect();

  // const payload = {
  //   productId: new mongoose.Types.ObjectId(productId),
  //   userEmail,
  // };

  // console.log(payload);

  try {
    const result = await accountInfoModel.findOneAndUpdate(
      { loginEmail: accountInfo?.loginEmail }, // search query
      { $set: accountInfo }, // data to update
      { new: true, upsert: true, setDefaultsOnInsert: true }
    ); // options

    return new NextResponse("A New Cart item has been Created", {
      status: 201,
      message: result,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
      message: err,
    });
  }
};

// export async function CreateOrUpdateInfo(email, updateData) {
//   try {
//     const result = await accountInfoModel.findOneAndUpdate(
//       { email: email }, // search query
//       { $set: updateData }, // data to update
//       { new: true, upsert: true, setDefaultsOnInsert: true }
//     ); // options
//     return result;
//   } catch (error) {
//     console.error("Error upserting user:", error);
//     throw error;
//   }
// }
