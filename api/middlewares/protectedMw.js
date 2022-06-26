/** @format */

import dotenv from "dotenv";

import { resMessages } from "../constants/resMessages.js";

dotenv.config();

export const protectedMw = (req, res, next) => {
 if (req.headers.auth === process.env.AUTH) {
  return next();
 } else {
  return res.json({
   message: resMessages.FAIL.STANDARD,
  });
 }
};
