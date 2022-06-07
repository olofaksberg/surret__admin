import { IproductModel, productModel } from "@/constants";

import { IinitState } from "../../productsSlice.types";

interface Iaction {
    payload: any;
    type: string;
}

export const stateActions = {
    // modify newProduct
    setName: (state: IinitState, action: Iaction) => {
        state.newProduct.name = action.payload;
    },
    setBalance: (state: IinitState, action: Iaction) => {
        state.newProduct.balance = action.payload;
    },
    setPrice: (state: IinitState, action: Iaction) => {
        state.newProduct.price = action.payload;
    },
    setCategory: (state: IinitState, action: Iaction) => {
        state.newProduct.category = action.payload;
    },
    setContent: (state: IinitState, action: Iaction) => {
        state.newProduct.content = action.payload;
    },
    setImg: (state: IinitState, action: Iaction) => {
        state.newProduct.img = action.payload.img;
        state.newProduct.imgId = action.payload.img.name;
        state.newProduct.imgURI = action.payload.imgURI;
    },
    setProductToUpdate: (state: IinitState, action: Iaction) => {
        const id = action.payload;
        state.newProduct = state.products?.find((d: any) => d._id === id) || productModel;
    },
    resetNewProduct: (state: IinitState, action: Iaction) => {
        state.newProduct = productModel;
    },
    // modify newProducts
    addNewProduct: (state: IinitState, action: Iaction) => {
        state.newProducts = [...state.newProducts, state.newProduct]
        state.newProduct = productModel;
    },
    deleteNewProduct: (state: IinitState, action: Iaction) => {
        state.newProducts = state.newProducts.filter((d: IproductModel, i: number) => i !== action.payload);
    },
    // modify message
    resetProductsMessage: (state: IinitState, action: Iaction) => {
        state.message = null;
    },
}