import { createAsyncThunk } from "@reduxjs/toolkit";

import { apiEndpoints } from "@/constants";

import {
    PROTECTED_GET,
    PROTECTED_POST,
} from "@/utils";

const fetchOrders = createAsyncThunk("fetchOrders", async () => {
    let res = await PROTECTED_GET(apiEndpoints().ORDERS.GET_ALL);
    return res;
});

const fetchActiveOrders = createAsyncThunk(
    "fetchActiveOrders",
    async () => {
        let res = await PROTECTED_GET(apiEndpoints().ORDERS.GET_ACTIVE);
        return res;
    }
);

const fetchOldOrders = createAsyncThunk("fetchOldOrders", async () => {
    let res = await PROTECTED_GET(apiEndpoints().ORDERS.GET_OLD);
    return res;
});

//  const fetchCreateOrders = createAsyncThunk(
//   "fetchCreateOrders",
//   async (newOrders) => {
//     let res = await PROTECTED_POST(apiEndpoints().ORDERS.CREATE, newOrders);
//     return res;
//   }
// );

const fetchUpdateOrderStatus = createAsyncThunk(
    "fetchUpdateOrderStatus",
    async (data: any) => {
        let res = await PROTECTED_POST(apiEndpoints().ORDERS.UPDATE_STATUS, {
            id: data[0],
            updatedStatus: data[1],
        });
        return res;
    }
);

const fetchUpdateOrderSeenStatus = createAsyncThunk(
    "fetchUpdateOrderSeenStatus",
    async (data) => {
        let res = await PROTECTED_POST(apiEndpoints().ORDERS.UPDATE_SEEN_STATUS, {
            ids: data,
        });
        return res;
    }
);

export const ordersFetches = {
    fetchUpdateOrderSeenStatus,
    fetchUpdateOrderStatus,
    fetchOldOrders,
    fetchActiveOrders,
    fetchOrders,
}