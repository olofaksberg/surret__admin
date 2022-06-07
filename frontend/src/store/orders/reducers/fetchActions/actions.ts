import { ActionReducerMapBuilder } from "@reduxjs/toolkit"
import { ImarketModel, orderCategories, statuses } from "../../../../constants";
import { IinitState } from "../../ordersSlice.types";

import { ordersFetches } from "./fetches"
import { sortOrders } from "../../utils";

export const fetchActions = (builder: ActionReducerMapBuilder<IinitState>) => {
    const {
        fetchUpdateOrderSeenStatus,
        fetchUpdateOrderStatus,
        fetchOldOrders,
        fetchActiveOrders,
        fetchOrders,
    } = ordersFetches;

    builder
        // get active data
        .addCase(fetchActiveOrders.pending, (state, action) => {
            state.status = statuses.LOADING;
        })
        .addCase(fetchActiveOrders.fulfilled, (state, action) => {
            const { success, message, data } = action.payload;
            if (success) {
                state.orders = sortOrders(data, orderCategories.ACTIVE);
                state.status = statuses.SUCCEEDED;
            } else {
                state.status = statuses.FAILED;
                state.message = message;
            }
        })
        .addCase(fetchActiveOrders.rejected, (state, action) => {
            state.status = statuses.FAILED;
            state.error = action.error.message;
        })
        // get old data
        .addCase(fetchOldOrders.pending, (state, action) => {
            state.status = statuses.LOADING;
        })
        .addCase(fetchOldOrders.fulfilled, (state, action) => {
            const { success, message, data } = action.payload;
            if (success) {
                state.status = statuses.SUCCEEDED;
                state.orders = state.orders.concat(sortOrders(data, orderCategories.OLD));
                state.oldFetched = true;
            } else {
                state.status = statuses.FAILED;
                state.message = message;
            }
        })
        .addCase(fetchOldOrders.rejected, (state, action) => {
            state.status = statuses.FAILED;
            state.error = action.error.message;
        })
        // edit data
        .addCase(fetchUpdateOrderStatus.pending, (state, action) => {
            state.status = statuses.LOADING;
        })
        .addCase(fetchUpdateOrderStatus.fulfilled, (state, action) => {
            const { success, message, data } = action.payload;
            if (success) {
                state.status = statuses.SUCCEEDED;
                // state.oldOrders.data.push(data);
                // state.activeOrders = state.activeOrders.filter((d: any) => d._id !== data._id);

                state.orders[state.orders.findIndex((d: any) => d._id === data._id)] = data;
                state.message = message;
            } else {
                state.status = statuses.FAILED;
                state.message = message;
            }
        })
        .addCase(fetchUpdateOrderStatus.rejected, (state, action) => {
            state.status = statuses.FAILED;
            state.error = action.error.message;
        })
        // edit seen status
        .addCase(fetchUpdateOrderSeenStatus.pending, (state, action) => {
            state.status = statuses.LOADING;
        })
        .addCase(fetchUpdateOrderSeenStatus.fulfilled, (state, action) => {
            const { success, message } = action.payload;
            if (success) {
                state.status = statuses.SUCCEEDED;
                state.orders = state.orders.map((d: any) => {
                    return {
                        ...d,
                        status: {
                            ...d.status,
                            seen: true,
                        },
                    };
                });
            } else {
                state.status = statuses.FAILED;
                state.message = message;
            }
        })
        .addCase(fetchUpdateOrderSeenStatus.rejected, (state, action) => {
            state.status = statuses.FAILED;
            state.error = action.error.message;
        });
}