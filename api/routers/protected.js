/** @format */

// imports
// - general
import express from "express";

// - controllers
import {
  create_products,
  update_product,
  delete_all_products,
  delete_product,
} from "../Controllers/product-controller.js";
import {
  create_markets,
  update_market,
  delete_all_markets,
  delete_market,
} from "../Controllers/market-controller.js";
import {
  get_active_orders,
  get_old_orders,
  update_order_status,
  update_order_seen_status,
  delete_all_orders,
} from "../Controllers/order-controller.js";

// - middlewares
import { upload } from "../middlewares/uploadImg.js";
// ---

const router = express.Router();

// product
router.post("/create_products", upload.array("image"), create_products);
router.post("/update_product", upload.single("image"), update_product);
router.get("/delete_all_products", delete_all_products);
router.get("/delete_product/:id", delete_product);

// market
router.post("/create_markets", upload.array("image"), create_markets);
router.post("/update_market", upload.single("image"), update_market);
router.get("/delete_all_markets", delete_all_markets);
router.get("/delete_market/:id", delete_market);

// order
router.get("/get_active_orders", get_active_orders);
router.get("/get_old_orders", get_old_orders);
router.post("/update_order_status", update_order_status);
router.post("/update_order_seen_status", update_order_seen_status);
router.get("/delete_all_orders", delete_all_orders);

export default router;
