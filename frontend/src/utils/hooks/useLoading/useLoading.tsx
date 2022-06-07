/** @format */

import { useSelector } from "react-redux";

import { productsData } from "@/store/products";
import { ordersData } from "@/store/orders";
import { marketsData } from "@/store/markets";
import { statuses } from "@/constants";
import { useEffect, useState } from "react";
import { Loading } from "@/components/layouts";

export const useLoading = (initValue: any) => {
 const { productsStatus } = useSelector(productsData);
 const { ordersStatus } = useSelector(ordersData);
 const { marketsStatus } = useSelector(marketsData);

 const [loading, setLoading] = useState<false | JSX.Element>(initValue);

 const sliceStates = [productsStatus, ordersStatus, marketsStatus];

 useEffect(() => {
  if (sliceStates.includes(statuses.LOADING)) setLoading(<Loading />);
  else setLoading(false);
 }, [sliceStates]);

 return [!!loading, loading];
};
