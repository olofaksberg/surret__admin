/** @format */

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { AppRoutes } from "./components";
import { Sidebar } from "@/components/layouts";
import { If } from "@/components/helpers";

import { statuses } from "@/constants";

import { useLoading, usePopup } from "@/utils";

import { productsData, productsFetches } from "@/store/products";
import { ordersData, ordersFetches } from "@/store/orders";
import { marketsData, marketsFetches } from "@/store/markets";

import "@/style/global.scss";

export const App = () => {
 const dispatch = useDispatch();

 const { productsStatus } = useSelector(productsData);
 const { ordersStatus } = useSelector(ordersData);
 const { marketsStatus } = useSelector(marketsData);
 const { fetchMarkets } = marketsFetches;
 const { fetchActiveOrders } = ordersFetches;
 const { fetchProducts } = productsFetches;

 const [isPopup, popupComponent] = usePopup(false);
 const [isLoading, loadingComponent] = useLoading(true);

 const sliceStatuses = [productsStatus, ordersStatus, marketsStatus];

 const initialFetch = () => {
  dispatch(fetchProducts());
  dispatch(fetchActiveOrders());
  dispatch(fetchMarkets());
 };

 useEffect(() => {
  if (sliceStatuses.every((obj) => obj === statuses.IDLE)) {
   initialFetch();
  }
 }, [sliceStatuses, dispatch]);

 if (isLoading) {
  return loadingComponent;
 }

 return (
  <div role={"approot"}>
   <If condition={!!isPopup}>
    <>{popupComponent}</>
   </If>

   <Router>
    <Sidebar />
    <AppRoutes />
   </Router>
  </div>
 );
};
