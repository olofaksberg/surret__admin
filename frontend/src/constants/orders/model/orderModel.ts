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
    products?: Array<IproductModel>,
}

// export const orderModel: IorderModel = {
//     name: "",
//     category: "",
//     balance: null,
//     price: null,
//     content: "",
//     orderAmount: null,
//     imgId: false,
//     imgURI: false,
//     img: false,
// }