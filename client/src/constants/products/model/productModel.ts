export interface IproductModel {
    _id?: string,
    name: string,
    category: string,
    balance?: number | null,
    price: number | null,
    content?: string,
    orderAmount?: string | number | null,
    imgId?: string | boolean,
    imgURI?: string | boolean,
    img?: string | boolean,
}

export const productModel: IproductModel = {
    name: "",
    category: "",
    balance: null,
    price: null,
    content: "",
    orderAmount: null,
    imgId: false,
    imgURI: false,
    img: false,
}