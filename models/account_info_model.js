import mongoose, { Schema } from "mongoose";

const accountInfoSchema = new Schema({
  // email for identifying, this is what i get after login
  loginEmail: {
    required: true,
    type: String,
  },
  // personal info
  personal_name: {
    required: true,
    type: String,
  },
  personal_email: {
    required: true,
    type: String,
  },
  personal_phone_no: {
    required: true,
    type: String,
  },

  //   shipping address
  shipping_name: {
    required: true,
    type: String,
  },
  shipping_address: {
    required: true,
    type: String,
  },
  shipping_phone_no: {
    required: true,
    type: String,
  },
  //   billing address
  billing_name: {
    required: true,
    type: String,
  },
  billing_address: {
    required: true,
    type: String,
  },
  billing_phone_no: {
    required: true,
    type: String,
  },
});

export const accountInfoModel =
  mongoose.models.accountInfo ??
  mongoose.model("accountInfo", accountInfoSchema);
