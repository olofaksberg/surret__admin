import { ImarketModel } from "../../constants";

export interface IinitState {
    markets: Array<ImarketModel>,
    newMarket: ImarketModel,
    newMarkets: Array<ImarketModel>,
    status: number,
    error: any,
    message: any,
}