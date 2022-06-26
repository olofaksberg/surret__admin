/** @format */

// imports
// - general
import express from "express";

// - controllers
import { create_order } from "../Controllers/order-controller.js";
import {
  get_product,
  get_all_products,
} from "../Controllers/product-controller.js";
import { get_all_markets } from "../Controllers/market-controller.js";
// ---

const router = express.Router();

// order
router.post("/create_order", create_order);

// product
router.get("/get_product/:id", get_product);
router.get("/get_all_products", get_all_products);

// market
router.get("/get_all_markets", get_all_markets);

export default router;
