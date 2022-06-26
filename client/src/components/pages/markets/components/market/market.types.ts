import { ImarketModel } from "@/constants";

export interface ImarketProps {
    market: ImarketModel,
    editable?: boolean,
    index?: number,
    customStyle?: string
}