import { ImarketModel } from "@/constants";

export interface IinitState {
    markets: ImarketModel[],
    newMarket: ImarketModel,
    newMarkets: ImarketModel[],
    status: number,
    error: any,
    message: any,
}