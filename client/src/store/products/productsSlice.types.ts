import { IproductModel } from "@/constants";

export interface IinitState {
    products: Array<IproductModel>,
    newProduct: IproductModel,
    newProducts: Array<IproductModel>,
    status: number,
    error: any,
    message: any,
}