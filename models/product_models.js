import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  category_name: {
    type: String,
    required: true,
  },
  inventory_count: {
    type: Number,
    required: true,
  },
  detail: {
    type: String,
    required: true,
  },
  more_detail: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  view_count: {
    type: Number,
    required: true,
  },
  arrival_date: {
    type: String,
    required: true,
  },
  reviewCount: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  SKU: {
    type: String,
    required: true,
  },
  img_url: [
    {
      type: String,
      required: true,
    },
  ],
});

export const productModel =
  mongoose.models?.products ?? mongoose.model("products", productSchema);
