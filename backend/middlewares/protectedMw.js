/** @format */

import dotenv from "dotenv";

import { resMessages } from "../utils/constants.js";

dotenv.config();

// auth kommer ersättas med token

export const protectedMw = (req, res, next) => {
  if (req.headers.auth === process.env.AUTH) {
    return next();
  } else {
    return res.json({
      message: resMessages.FAIL.STANDARD,
    });
  }
};
