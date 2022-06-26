/** @format */

// imports
// - models
import { productModel } from "../Models/product-model.js";

// - utils
import { resMessages } from "../utils/constants.js";
// ---

export const create_products = async (req, res) => {
  try {
    const reqData = JSON.parse(req.body.data);
    const newProducts = await productModel.create(reqData);

    return res.json(resMessages(newProducts).SUCCESS.PRODUCT.CREATED);
  } catch (err) {
    return res.json(resMessages().FAIL.STANDARD);
  }
};

export const get_product = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await productModel.findById(id).exec();

    return res.json(resMessages(product).SUCCESS.STANDARD);
  } catch (err) {
    return res.json(resMessages().FAIL.STANDARD);
  }
};

export const get_all_products = async (req, res) => {
  try {
    const products = await productModel.find({}).exec();

    return res.json(resMessages(products).SUCCESS.STANDARD);
  } catch (err) {
    return res.json(resMessages().FAIL.STANDARD);
  }
};

export const update_product = async (req, res) => {
  try {
    const reqData = JSON.parse(req.body.data);
    const { _id, ...rest } = reqData;

    const updatedProduct = await productModel.findOneAndUpdate(
      { _id: _id },
      rest,
      {
        returnDocument: "after",
      }
    );

    return res.json(resMessages(updatedProduct).SUCCESS.PRODUCT.UPDATED);
  } catch (err) {
    return res.json(resMessages().FAIL.STANDARD);
  }
};

export const delete_all_products = async (req, res) => {
  try {
    await productModel.deleteMany({}).exec();

    return res.json(resMessages().SUCCESS.STANDARD);
  } catch (err) {
    return res.json(resMessages().FAIL.STANDARD);
  }
};

export const delete_product = async (req, res) => {
  try {
    const id = req.params.id;
    await productModel.findByIdAndDelete(id).exec();

    return res.json(resMessages(id).SUCCESS.PRODUCT.DELETED);
  } catch (err) {
    return res.json(resMessages().FAIL.STANDARD);
  }
};
