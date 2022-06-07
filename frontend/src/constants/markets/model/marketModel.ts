import { IproductModel } from "../../products"

export interface ImarketModel {
    _id?: string,
    name: string,
    address: string,
    date: {
        date: string,
        time: {
            start: string,
            end: string,
        }
    },
    imgId?: string | boolean,
    imgURI?: string | boolean,
    img?: string | boolean,
    products: Array<IproductModel>
}

export const marketModel: ImarketModel = {
    name: "",
    address: "",
    date: {
        date: "",
        time: {
            start: "",
            end: "",
        }
    },
    imgId: false,
    imgURI: false,
    img: false,
    products: []
}