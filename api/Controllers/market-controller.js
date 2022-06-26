/** @format */

// imports
// - models
import { marketModel } from "../Models/market-model.js";
import { productModel } from "../Models/product-model.js";

// - utils
import { resMessages } from "../constants/resMessages.js";
// ---

export const create_markets = async (req, res) => {
 try {
  const reqData = JSON.parse(req.body.data);
  const markets = await marketModel.create(reqData);

  const promiseMeBaby = markets.map(async (m) => {
   const promises = await Promise.all(
    m.products.map(async (p) => {
     const res = await productModel.findById(p._id);
     return res;
    })
   );
   return { ...m._doc, products: promises };
  });

  const newMarkets = await Promise.all(promiseMeBaby);

  return res.json(resMessages(newMarkets).SUCCESS.MARKET.CREATED);
 } catch (err) {
  return res.json(resMessages().FAIL.STANDARD);
 }
};

export const get_market = async (req, res) => {
 try {
  const id = req.params.id;
  const market = await marketModel.findById(id).exec();

  return res.json(resMessages(market).SUCCESS.STANDARD);
 } catch (err) {
  return res.json(resMessages().FAIL.STANDARD);
 }
};

export const get_all_markets = async (req, res) => {
 try {
  const markets = await marketModel.find({}).populate({
   path: "products",
  });

  return res.json(resMessages(markets).SUCCESS.STANDARD);
 } catch (err) {
  return res.json(resMessages().FAIL.STANDARD);
 }
};

export const update_market = async (req, res) => {
 try {
  const reqData = JSON.parse(req.body.data);
  const { _id, ...rest } = reqData;

  const updatedMarket = await marketModel.findOneAndUpdate({ _id: _id }, rest, {
   returnDocument: "after",
  });

  return res.json(resMessages(updatedMarket).SUCCESS.MARKET.UPDATED);
 } catch (err) {
  return res.json(resMessages().FAIL.STANDARD);
 }
};

export const delete_all_markets = async (req, res) => {
 try {
  await marketModel.deleteMany({}).exec();

  return res.json(resMessages().SUCCESS.STANDARD);
 } catch (err) {
  return res.json(resMessages().FAIL.STANDARD);
 }
};

export const delete_market = async (req, res) => {
 try {
  const id = req.params.id;

  const market = await marketModel.findById(id).exec();
  if (market.imgId) {
   const filePath = "./client/public/" + market.imgId;
   fs.unlinkSync(filePath);
  }
  await marketModel.findByIdAndDelete(id).exec();

  return res.json(resMessages(id).SUCCESS.MARKET.DELETED);
 } catch (err) {
  return res.json(resMessages().FAIL.STANDARD);
 }
};
