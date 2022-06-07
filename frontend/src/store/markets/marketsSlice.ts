/** @format */

// imports
// - general
import { createSlice } from "@reduxjs/toolkit";
import { stateActions, fetchActions } from "./reducers"
// - utils

import { marketModel, statuses } from "@/constants";
import { IinitState } from "./marketSlice.types"

// ---

// slice
const initialState: IinitState = {
  markets: [],
  newMarket: marketModel,
  newMarkets: [],
  status: statuses.IDLE,
  error: null,
  message: null,
};

export const marketsSlice = createSlice({
  name: "markets",
  initialState,
  reducers: stateActions,
  extraReducers(builder) {
    fetchActions(builder)
  }
});

// export actions
export const marketsActions = () => {
  const origin = marketsSlice.actions;
  return {
    addNewMarket: origin.addNewMarket,
    deleteNewMarket: origin.deleteNewMarket,
    resetNewMarket: origin.resetNewMarket,
    setMarketToUpdate: origin.setMarketToUpdate,
    resetMarketsMessage: origin.resetMarketsMessage,
    setName: origin.setName,
    setAddress: origin.setAddress,
    setDate: origin.setDate,
    setStartTime: origin.setStartTime,
    setEndTime: origin.setEndTime,
    setImg: origin.setImg,
    setProducts: origin.setProducts,
  };
};


// export data
export const marketsData = (state: any) => {
  const origin = state.markets;
  return {
    markets: origin.markets,
    newMarkets: origin.newMarkets,
    newMarket: origin.newMarket,
    marketsStatus: origin.status,
    marketsMessage: origin.message,
  };
};

export default marketsSlice.reducer;
