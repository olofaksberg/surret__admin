import { createAsyncThunk } from "@reduxjs/toolkit";

import { apiEndpoints, IproductModel } from "@/constants";

import {
    GET,
    PROTECTED_GET,
    PROTECTED_POST_FORMDATA,
} from "@/utils";

const fetchProducts = createAsyncThunk("fetchProducts", async () => {
    let res = await GET(apiEndpoints().PRODUCTS.GET_ALL);
    return res;
});

const fetchCreateProducts = createAsyncThunk(
    "fetchCreateProducts",
    async (newProducts: {
        data: IproductModel[],
        images?: any,
    }) => {
        const formData = new FormData();
        newProducts.images.forEach((d: string, i: number) => {
            formData.append("image", d);
        });
        formData.append("data", JSON.stringify(newProducts.data));
        const res = await PROTECTED_POST_FORMDATA(
            apiEndpoints().PRODUCTS.CREATE,
            formData
        );
        return res;
    }
);

const fetchUpdateProduct = createAsyncThunk(
    "fetchUpdateProduct",
    async (productToUpdate: {
        data: IproductModel, image: string
    }) => {
        const formData = new FormData();
        formData.append("image", productToUpdate.image);
        formData.append("data", JSON.stringify(productToUpdate.data));
        const res = await PROTECTED_POST_FORMDATA(
            apiEndpoints().PRODUCTS.UPDATE,
            formData
        );
        return res;
    }
);

const fetchDeleteProduct = createAsyncThunk(
    "fetchDeleteProduct",
    async (id: string) => {
        const res = await PROTECTED_GET(apiEndpoints(id).PRODUCTS.DELETE);
        return res;
    }
);

export const productsFetches = {
    fetchDeleteProduct,
    fetchUpdateProduct,
    fetchCreateProducts,
    fetchProducts,
}
