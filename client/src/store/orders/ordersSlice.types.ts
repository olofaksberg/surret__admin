import { IorderModel } from "@/constants";

export interface IinitState {
    orders: IorderModel[],
    oldFetched: boolean,
    status: number,
    error: any,
    message: any,
}