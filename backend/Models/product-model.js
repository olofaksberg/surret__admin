/** @format */

import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
  },
  price: {
    type: Number,
    required: true,
  },
  content: {
    type: String,
  },
  imgId: {
    type: String,
  },
  orderAmount: {
    type: Number,
    default: 0,
  },
});

export const productModel = mongoose.model("Product", productSchema);
