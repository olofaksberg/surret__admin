import { IorderModel } from "@/constants";

export const getNotifications = (data: Record<string, any[]>) => {
    const newOrdersAmount = data.orders.filter(
        (d: IorderModel) => !d.status.seen
    ).length;

    return {
        ordersNoti:
            newOrdersAmount > 0
                ? {
                    main: newOrdersAmount,
                    onHover: newOrdersAmount > 1 ? " NYA ORDRAR" : " NY ORDER",
                }
                : null,
        productsNoti: null,
        marketsNoti: null,
    };
};