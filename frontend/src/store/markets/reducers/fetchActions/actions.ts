import { ActionReducerMapBuilder } from "@reduxjs/toolkit"
import { ImarketModel, statuses } from "../../../../constants";
import { IinitState } from "../../marketSlice.types";
import { sortMarkets } from "../../utils";

import { marketsFetches } from "./fetches"


export const fetchActions = (builder: ActionReducerMapBuilder<IinitState>) => {
    const { fetchCreateMarkets, fetchDeleteMarket, fetchMarkets, fetchUpdateMarket } = marketsFetches
    builder
        .addCase(fetchMarkets.pending, (state, action) => {
            state.status = statuses.LOADING;
        })
        .addCase(fetchMarkets.fulfilled, (state, action) => {
            const { success, message, data } = action.payload;
            if (success) {
                state.status = statuses.SUCCEEDED;
                // state.markets = sortMarkets(state.markets.concat(data));
                state.markets = sortMarkets(data);
            } else {
                state.status = statuses.FAILED;
                state.message = message;
            }
        })
        .addCase(fetchMarkets.rejected, (state, action) => {
            state.status = statuses.FAILED;
            state.error = action.error.message;
        })
        // add data
        .addCase(fetchCreateMarkets.pending, (state, action) => {
            state.status = statuses.LOADING;
        })
        .addCase(fetchCreateMarkets.fulfilled, (state, action) => {
            const { success, message, data } = action.payload;
            console.log(state.markets);
            console.log(data);

            if (success) {
                state.status = statuses.SUCCEEDED;
                state.markets = sortMarkets(
                    state.markets
                        // .filter((d: ImarketModel) => d._id)
                        .concat(data)
                );
                state.newMarkets = [];
                state.message = message;
            } else {
                state.status = statuses.FAILED;
                state.message = message;
            }
        })
        .addCase(fetchCreateMarkets.rejected, (state, action) => {
            state.status = statuses.FAILED;
            state.error = action.error.message;
        })
        // edit data
        .addCase(fetchUpdateMarket.pending, (state, action) => {
            state.status = statuses.LOADING;
        })
        .addCase(fetchUpdateMarket.fulfilled, (state, action) => {
            const { success, message, data } = action.payload;
            if (success) {
                state.status = statuses.SUCCEEDED;
                state.markets = sortMarkets(
                    state.markets.map((d: ImarketModel) => (d._id === data._id ? data : d))
                );
                state.message = message;
            } else {
                state.status = statuses.FAILED;
                state.message = message;
            }
        })
        .addCase(fetchUpdateMarket.rejected, (state, action) => {
            state.status = statuses.FAILED;
            state.error = action.error.message;
        })
        // delete data
        .addCase(fetchDeleteMarket.pending, (state, action) => {
            state.status = statuses.LOADING;
        })
        .addCase(fetchDeleteMarket.fulfilled, (state, action) => {
            const { success, message, data } = action.payload;
            if (success) {
                state.status = statuses.SUCCEEDED;
                state.markets = state.markets.filter((d: ImarketModel) => d._id !== data);
            } else {
                state.status = statuses.FAILED;
                state.message = message;
            }
        })
        .addCase(fetchDeleteMarket.rejected, (state, action) => {
            state.status = statuses.FAILED;
            state.error = action.error.message;
        });
}


