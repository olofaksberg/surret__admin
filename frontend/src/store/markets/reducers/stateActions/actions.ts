import { ImarketModel, IproductModel, marketModel } from "@/constants";

import { IinitState } from "../../marketSlice.types";

interface Iaction {
    payload: any;
    type: string;
}

export const stateActions = {
    // modify newMarket
    setName: (state: IinitState, action: Iaction) => {
        state.newMarket.name = action.payload;
    },
    setAddress: (state: IinitState, action: Iaction) => {
        state.newMarket.address = action.payload;
    },
    setDate: (state: IinitState, action: Iaction) => {
        state.newMarket.date.date = action.payload;
    },
    setStartTime: (state: IinitState, action: Iaction) => {
        state.newMarket.date.time.start = action.payload;
    },
    setEndTime: (state: IinitState, action: Iaction) => {
        state.newMarket.date.time.end = action.payload;
    },
    setImg: (state: IinitState, action: Iaction) => {
        state.newMarket.img = action.payload.img;
        state.newMarket.imgId = action.payload.img.name;
        state.newMarket.imgURI = action.payload.imgURI;
    },
    setProducts: (state: IinitState, action: Iaction) => {
        action.payload.isAdded
            ? state.newMarket.products = state.newMarket.products?.filter(
                (d: IproductModel) => d._id !== action.payload.product._id
            ) : state.newMarket.products = [...state.newMarket.products, action.payload.product];

    },
    setMarketToUpdate: (state: IinitState, action: Iaction) => {
        const id = action.payload;
        state.newMarket = state.markets?.find((d: ImarketModel) => d._id === id) || marketModel;
    },
    resetNewMarket: (state: IinitState, action: Iaction) => {
        state.newMarket = marketModel;
    },
    // modify newMarkets
    addNewMarket: (state: IinitState, action: Iaction) => {
        state.newMarkets = [...state.newMarkets, state.newMarket]
        state.newMarket = marketModel;
    },
    deleteNewMarket: (state: IinitState, action: Iaction) => {
        state.newMarkets = state.newMarkets.filter((d: ImarketModel, i: number) => i !== action.payload);
    },
    // modify message
    resetMarketsMessage: (state: IinitState, action: Iaction) => {
        state.message = null;
    }
}