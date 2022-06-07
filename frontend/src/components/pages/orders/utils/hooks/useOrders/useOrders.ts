import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";

import { orderCategories, statuses } from "@/constants";

import { ordersData, ordersFetches } from "@/store/orders";

export const useOrders = (initValue: any) => {
    const dispatch = useDispatch();

    const [value, setValue] = useState<number | null>(initValue);

    const { ordersStatus, oldFetched } = useSelector(ordersData);
    const { fetchActiveOrders, fetchOldOrders } = ordersFetches;

    const func = (value: any) => {
        switch (value) {
            case orderCategories.ACTIVE:
                if (ordersStatus === statuses.IDLE) {
                    dispatch(fetchActiveOrders());
                }
                break;
            default:
                if (!oldFetched) {
                    dispatch(fetchOldOrders());
                }
                break;
        }
    }

    useEffect(() => {
        func(value);
    }, [value, oldFetched])

    return [value, setValue]
}