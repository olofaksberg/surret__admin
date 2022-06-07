/** @format */

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import index from "./backend/routers/index.js";
import protectedRouter from "./backend/routers/protected.js";

import { protectedMw } from "./backend/middlewares/protectedMw.js";

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

app.use("/", express.static("./frontend/build"));
app.use("/protected", protectedMw, protectedRouter);
app.use("/", index);

app.get("*", (req, res) =>
 res.sendFile("index.html", {
  root: "./frontend/build",
 })
);

app.listen(port, () => {
 console.log("lyssnar " + port);
});