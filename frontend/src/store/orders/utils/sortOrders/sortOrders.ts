import { IorderModel, orderCategories } from "../../../../constants";


const getSortDateStr = (sortStr: string) => {
    return parseInt(sortStr.replace(/[- :T-_]/g, ""));
};

export const sortOrders = (arr: IorderModel[], state: number) => {
    return arr.sort((a, b) => {
        if (state === orderCategories.ACTIVE)
            return getSortDateStr(b.status.createdAt) - getSortDateStr(a.status.createdAt);
        return getSortDateStr(b.status.updatedAt) - getSortDateStr(a.status.updatedAt);
    }
    );
};
