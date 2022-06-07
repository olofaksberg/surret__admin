/** @format */

import mongoose from "mongoose";

const { Schema, Types } = mongoose;

const marketSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  date: {
    date: {
      type: String,
    },
    time: {
      start: {
        type: String,
      },
      end: {
        type: String,
      },
    },
  },
  imgId: {
    type: String,
  },
  products: [
    {
      type: Types.ObjectId,
      ref: "Product",
    },
  ],
});

export const marketModel = mongoose.model("Market", marketSchema);
