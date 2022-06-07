import { IsortMarkets } from "./sortMarkets.types";

const getSortDateStr = (sortStr: any) => {
    return sortStr.replace(/[-:T_]/g, "");
};

export const sortMarkets: IsortMarkets = (arr) => {
    return arr?.sort(
        (a: any, b: any) =>
            getSortDateStr(a.date.date + a.date.time.start) -
            getSortDateStr(b.date.date + b.date.time.start)
    );
};