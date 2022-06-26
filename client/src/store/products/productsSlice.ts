/** @format */

import { createSlice } from "@reduxjs/toolkit";

import { productModel, statuses } from "@/constants";

import { IinitState } from "./productsSlice.types"
import { stateActions, fetchActions } from "./reducers"

const initialState: IinitState = {
  products: [],
  newProduct: productModel,
  newProducts: [],
  status: statuses.IDLE,
  error: null,
  message: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: stateActions,
  extraReducers(builder) {
    fetchActions(builder)
  }
});

// export actions
export const productsActions = () => {
  const origin = productsSlice.actions;
  return {
    setName: origin.setName,
    setBalance: origin.setBalance,
    setPrice: origin.setPrice,
    setCategory: origin.setCategory,
    setContent: origin.setContent,
    setImg: origin.setImg,
    addNewProduct: origin.addNewProduct,
    deleteNewProduct: origin.deleteNewProduct,
    resetNewProduct: origin.resetNewProduct,
    setProductToUpdate: origin.setProductToUpdate,
    resetProductsMessage: origin.resetProductsMessage,
  };
};

// export data
export const productsData = (state: any) => {
  const origin = state.products;
  return {
    allProducts: origin.products,
    newProducts: origin.newProducts,
    newProduct: origin.newProduct,
    productsStatus: origin.status,
    productsMessage: origin.message,

  };
};

export default productsSlice.reducer;