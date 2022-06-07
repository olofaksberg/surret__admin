import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { IproductModel, statuses } from "../../../../constants";
import { IinitState } from "../../productsSlice.types";
import { productsFetches } from "./fetches";

export const fetchActions = (builder: ActionReducerMapBuilder<IinitState>) => {
    const {
        fetchDeleteProduct,
        fetchUpdateProduct,
        fetchCreateProducts,
        fetchProducts,
    } = productsFetches;

    builder
        // get all data
        .addCase(fetchProducts.pending, (state, action) => {
            state.status = statuses.LOADING;
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            const { success, message, data } = action.payload;
            if (success) {
                state.products = data;
                state.status = statuses.SUCCEEDED;
            } else {
                state.status = statuses.FAILED;
                state.message = message;
            }
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.status = statuses.FAILED;
            state.error = action.error.message;
        })
        // add data
        .addCase(fetchCreateProducts.pending, (state, action) => {
            state.status = statuses.LOADING;
        })
        .addCase(fetchCreateProducts.fulfilled, (state, action) => {
            const { success, message, data } = action.payload;
            if (success) {
                state.status = statuses.SUCCEEDED;
                state.products = state.products.filter((d: IproductModel) => d._id).concat(data);
                state.newProducts = [];
                state.message = message;
            } else {
                state.status = statuses.FAILED;
                state.message = message;
            }
        })
        .addCase(fetchCreateProducts.rejected, (state, action) => {
            state.status = statuses.FAILED;
            state.error = action.error.message;
        })
        // edit data
        .addCase(fetchUpdateProduct.pending, (state, action) => {
            state.status = statuses.LOADING;
        })
        .addCase(fetchUpdateProduct.fulfilled, (state, action) => {
            const { success, message, data } = action.payload;
            if (success) {
                state.status = statuses.SUCCEEDED;
                state.products = state.products.map((d: IproductModel) =>
                    d._id === data._id ? data : d
                );
                state.message = message;
            } else {
                state.status = statuses.FAILED;
                state.message = message;
            }
        })
        .addCase(fetchUpdateProduct.rejected, (state, action) => {
            state.status = statuses.FAILED;
            state.error = action.error.message;
        })
        // delete data
        .addCase(fetchDeleteProduct.pending, (state, action) => {
            state.status = statuses.LOADING;
        })
        .addCase(fetchDeleteProduct.fulfilled, (state, action) => {
            const { success, message, data } = action.payload;
            if (success) {
                state.status = statuses.SUCCEEDED;
                state.products = state.products.filter((d: IproductModel) => d._id !== data);
            } else {
                state.status = statuses.FAILED;
                state.message = message;
            }
        })
        .addCase(fetchDeleteProduct.rejected, (state, action) => {
            state.status = statuses.FAILED;
            state.error = action.error.message;
        });
}