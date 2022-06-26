/** @format */

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import index from "./api/routers/index.js";
import protectedRouter from "./api/routers/protected.js";

import { protectedMw } from "./api/middlewares/protectedMw.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 80;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

(async () => {
 try {
  await mongoose.connect(process.env.DB_URI);
  console.log("DB connected");
 } catch (err) {
  process.exit();
 }
})();

const corsOptions = {
 origin: "*",
 credentials: true,
 optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use("/", express.static("./client/public"));
app.use("/protected", protectedMw, protectedRouter);
app.use("/", index);

app.get("*", (req, res) =>
 res.sendFile("index.html", {
  root: "./client/build",
 })
);

app.listen(port, () => {
 console.log("lyssnar " + port);
});
