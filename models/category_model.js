import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  category_name: {
    required: false,
    type: String,
  },
  img_url: {
    required: false,
    type: String,
  },
});

export const categoryModel =
  mongoose.models?.category ?? mongoose.model("category", schema);
