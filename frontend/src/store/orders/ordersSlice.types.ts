import { IorderModel } from "../../constants";

export interface IinitState {
    orders: Array<IorderModel>,
    oldFetched: boolean,
    status: number,
    error: any,
    message: any,
}