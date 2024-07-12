import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  name: {
    required: false,
    type: String,
  },
  password: {
    required: false,
    type: String,
  },
  email: {
    required: false,
    type: String,
  },

  role: {
    required: false,
    type: String,
  },
});

export const userModel =
  mongoose.models?.users ?? mongoose.model("users", schema);
