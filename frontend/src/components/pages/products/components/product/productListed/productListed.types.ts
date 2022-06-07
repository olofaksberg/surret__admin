import { IproductModel } from "../../../../../../constants";

export interface IproductListedProps {
    product: IproductModel;
    amount?: number;
    last?: boolean;
    customStyle?: string;
}