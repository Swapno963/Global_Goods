import { NextResponse } from "next/server";

import { productModel } from "@/models/product_models";
import dbConnect from "@/service/mongo";

export const POST = async (request) => {
  const { minPrice, maxPrice, size, category_name, searchTerm } =
    await request.json();

  console.log(minPrice, maxPrice, size, category_name, searchTerm);
  await dbConnect();

  try {
    console.log(
      minPrice,
      maxPrice,
      size,
      "category name :",
      category_name,
      "search :",
      searchTerm
    );
    const query = {
      category_name: category_name || "Living Room", // Default to 'Living Room' if categoryName is not provided
      price: { $gte: minPrice || 0, $lte: maxPrice || Infinity }, // Set price range
      ...(size && { size }), // Add size filter if provided
      // ...(searchTerm && { title: { $regex: searchTerm, $options: "i" } }), // Add search term filter if provided
    };
    const result = await productModel.find(query).lean(); // options
    // console.log(result);

    return NextResponse.json(result, { status: 200 });

    // return res.status(200).json(result);
    // return new NextResponse("got the data", {
    //   status: 201,
    //   message: result,
    // });
  } catch (err) {
    console.log(err);
    return new NextResponse(err, {
      status: 500,
      err,
    });
  }
};
