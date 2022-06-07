import { ordersFetches } from "@/store/orders";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { orderCategories, statuses } from "../../../../../../constants";
import { ordersData } from "../../../../../../store/orders/ordersSlice";

export const useOrders = (initValue: any) => {
    const dispatch = useDispatch();
    const { ordersStatus, oldFetched } =
        useSelector(ordersData);

    const { fetchActiveOrders, fetchOldOrders } = ordersFetches;
    const [value, setValue] = useState<number | null>(initValue);

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