import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiEndpoints, ImarketModel } from "../../../../constants";
import {
    GET,
    PROTECTED_GET,
    PROTECTED_POST_FORMDATA,
} from "../../../../utils";
// fetches
const fetchMarkets = createAsyncThunk("fetchMarkets", async () => {
    const res = await GET(apiEndpoints().MARKETS.GET_ALL);
    return res;
});

const fetchCreateMarkets = createAsyncThunk(
    "fetchCreateMarkets",
    async (newMarkets: {
        data: Array<ImarketModel> | null,
        images?: any,
    }) => {
        const formData = new FormData();
        newMarkets.images.forEach((d: any, i: number) => {
            formData.append("image", d);
        });
        formData.append("data", JSON.stringify(newMarkets.data));
        const res = await PROTECTED_POST_FORMDATA(
            apiEndpoints().MARKETS.CREATE,
            formData
        );
        return res;
    }
);

const fetchUpdateMarket = createAsyncThunk(
    "fetchUpdateMarket",
    async (marketToUpdate: {
        data: ImarketModel, image: string
    }) => {
        const formData = new FormData();
        formData.append("image", marketToUpdate.image);
        formData.append("data", JSON.stringify(marketToUpdate.data));
        const res = await PROTECTED_POST_FORMDATA(
            apiEndpoints().MARKETS.UPDATE,
            formData
        );
        return res;
    }
);

const fetchDeleteMarket = createAsyncThunk(
    "fetchDeleteMarket",
    async (id: string | number) => {
        const res = await PROTECTED_GET(apiEndpoints(id).MARKETS.DELETE);
        return res;
    }
);

export const marketsFetches = {
    fetchDeleteMarket,
    fetchUpdateMarket,
    fetchCreateMarkets,
    fetchMarkets
}