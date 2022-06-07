/** @format */

import { createSlice } from "@reduxjs/toolkit";

import { statuses } from "@/constants";

import { IinitState } from "./ordersSlice.types"
import { stateActions, fetchActions } from "./reducers"

const initialState: IinitState = {
  orders: [],
  oldFetched: false,
  status: statuses.IDLE,
  error: null,
  message: null,
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: stateActions,
  extraReducers(builder) {
    fetchActions(builder)
  }
});

// export actions
export const ordersActions = () => {
  const origin = ordersSlice.actions;
  return {
    resetOrdersMessage: origin.resetOrdersMessage,
  };
};

// export data
export const ordersData = (state: any) => {
  const origin = state.orders;
  return {
    orders: origin.orders,
    oldFetched: origin.oldFetched,
    ordersStatus: origin.status,
    ordersMessage: origin.message,
  };
};

export default ordersSlice.reducer;
