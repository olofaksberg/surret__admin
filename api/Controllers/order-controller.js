/** @format */

// imports
// - models
import { orderModel } from "../Models/order-model.js";
import { productModel } from "../Models/product-model.js";

// - utils
import { resMessages } from "../constants/resMessages.js";
// ---

export const create_order = async (req, res) => {
 try {
  const newOrder = await orderModel.create({
   status: { createdAt: new Date().toLocaleString("sv-SE") },
   customer: req.body.customer,
   products: req.body.products,
   customerComment: req.body.customerComment,
  });

  newOrder.products.map(async (p) => {
   const prevAmount = await productModel.find(
    { _id: p.product },
    { orderAmount: 1, _id: 0 }
   );
   await productModel.findOneAndUpdate(
    { _id: p.product },
    {
     orderAmount: prevAmount[0].orderAmount + p.amount,
    }
   );
  });

  return res.json(resMessages(newOrder).SUCCESS.ORDER.CREATED);
 } catch (err) {
  return res.json(resMessages().FAIL.STANDARD);
 }
};

export const get_active_orders = async (req, res) => {
 try {
  const orders = await orderModel
   .find({})
   .where("status.orderStatus", 0)
   .populate({
    path: "products",
    populate: {
     path: "product",
     model: "Product",
    },
   });

  return res.json(resMessages(orders).SUCCESS.STANDARD);
 } catch (err) {
  return res.json(resMessages().FAIL.STANDARD);
 }
};

export const get_old_orders = async (req, res) => {
 try {
  const orders = await orderModel
   .find({})
   .where("status.orderStatus", 1)
   .populate({
    path: "products",
    populate: {
     path: "product",
     model: "Product",
    },
   });

  return res.json(resMessages(orders).SUCCESS.STANDARD);
 } catch (err) {
  return res.json(resMessages().FAIL.STANDARD);
 }
};

export const update_order_status = async (req, res) => {
 const { id, updatedStatus } = req.body;
 try {
  const order = await orderModel.findOneAndUpdate(
   { _id: id },
   {
    $set: {
     "status.orderStatus": updatedStatus,
     "status.updatedAt": new Date().toLocaleString("sv-SE"),
    },
   },
   {
    returnDocument: "after",
   }
  );

  return res.json(resMessages(order).SUCCESS.ORDER.UPDATED);
 } catch (err) {
  return res.json(resMessages().FAIL.STANDARD);
 }
};

export const update_order_seen_status = async (req, res) => {
 try {
  await orderModel.updateMany(
   { "status.seen": false },
   {
    $set: {
     "status.seen": true,
    },
   }
  );

  return res.json(resMessages().SUCCESS.STANDARD);
 } catch (err) {
  return res.json(resMessages().FAIL.STANDARD);
 }
};

export const delete_all_orders = async (req, res) => {
 try {
  await orderModel.deleteMany({}).exec();

  return res.json(resMessages().SUCCESS.STANDARD);
 } catch (err) {
  return res.json(resMessages().FAIL.STANDARD);
 }
};
