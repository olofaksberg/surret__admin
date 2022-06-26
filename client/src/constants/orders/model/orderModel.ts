import { IproductModel } from "../../products"

export interface IorderModel {
    _id: string,
    status: {
        orderStatus: number,
        createdAt: string,
        updatedAt: string,
        seen: boolean
    },
    customer: {
        name: string,
        address: string,
        postnumber: number,
        city: string,
        contact: string,
        comment?: string,
    },
    products?: IproductModel[],
}
