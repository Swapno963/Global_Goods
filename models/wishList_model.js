import { ObjectId } from "mongodb";
import mongoose, { Schema } from "mongoose";

const wishSchema = new Schema({
  productId: {
    required: true,
    type: ObjectId,
  },
  userEmail: {
    required: true,
    type: String,
  },
});

export const wishModel =
  mongoose.models.wishList ?? mongoose.model("wishList", wishSchema);
