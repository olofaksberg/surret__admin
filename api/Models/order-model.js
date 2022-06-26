/** @format */

import mongoose from "mongoose";

const { Schema, Types } = mongoose;

const orderSchema = new Schema({
  status: {
    createdAt: {
      type: String,
      required: true,
    },
    orderStatus: {
      type: Number,
      default: 0,
    },
    updatedAt: {
      type: String,
    },
    seen: {
      type: Boolean,
      default: false,
    },
  },
  customer: {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    postnumber: {
      type: Number,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
    },
  },
  products: [
    {
      product: {
        type: Types.ObjectId,
        ref: "Product",
      },
      amount: {
        type: Number,
      },
    },
  ],
});

export const orderModel = mongoose.model("Order", orderSchema);
