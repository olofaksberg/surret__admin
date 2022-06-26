/** @format */

import multer from "multer";
import { dev } from "../utils/constants.js";

const DIR = dev ? "./client/public/" : "./client/build/";

const storage = multer.diskStorage({
 destination: (req, file, cb) => {
  cb(null, DIR);
 },
 filename: (req, file, cb) => {
  const fileName = file.originalname.toLowerCase().split(" ").join("-");
  cb(null, fileName);
 },
});
export const upload = multer({
 storage: storage,
 fileFilter: (req, file, cb) => {
  if (
   file.mimetype == "image/png" ||
   file.mimetype == "image/jpg" ||
   file.mimetype == "image/jpeg"
  ) {
   cb(null, true);
  } else {
   cb(null, false);
   return cb(new Error("Only .png, .jpg and .jpeg format plz"));
  }
 },
});
