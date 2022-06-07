
// imports
// - general
import { ordersFetches } from "@/store/orders";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// - config
import { orderCategories, statuses } from "../../../../constants";
// - constants
// - store
import {
  ordersData,
} from "../../../../store/orders/ordersSlice";
// ---

export const useHandleOrders = () => {
  const dispatch = useDispatch();

  // const { activeOrders, oldOrders, ordersStatus, ordersMessage } =
  //   useSelector(ordersData);
  const { orders, ordersStatus, ordersMessage } =
    useSelector(ordersData);
  const { fetchActiveOrders,
    fetchOldOrders } = ordersFetches;
  const [ordersFilter, setOrdersFilter] = useState(orderCategories.ACTIVE);

  // const [orders, setOrders] = useState(activeOrders);

  const timeStamps = (stamps: any) => {
    const { orderStatus, seen, ...rest } = stamps;
    const arr = [];
    for (const key in rest) {
      arr.push({
        label: key === "createdAt" ? "Mottagen: " : "Arkiverad: ",
        time: rest[key],
      });
    }
    return arr;
  };

  // useEffect(() => {
  //   console.log('mm');

  //   if (ordersStatus === statuses.IDLE) {
  //     console.log('active fetch');

  //     dispatch(fetchActiveOrders());
  //   }
  //   if (ordersFilter === orderCategories.OLD) {
  //     if (!oldOrders.fetched) {
  //       dispatch(fetchOldOrders());
  //     }
  //     setOrders(oldOrders.data);

  //   } else {
  //     setOrders(activeOrders);
  //   }
  // }, [ordersFilter, ordersStatus]);

  return {
    // orders,

    timeStamps,

    ordersFilterState: { ordersFilter, setOrdersFilter },
  };
};
