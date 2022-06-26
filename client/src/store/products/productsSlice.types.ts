import { IproductModel } from "@/constants";

export interface IinitState {
    products: IproductModel[],
    newProduct: IproductModel,
    newProducts: IproductModel[],
    status: number,
    error: any,
    message: any,
}