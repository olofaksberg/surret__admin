/** @format */

// imports
// - general

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { statuses } from "@/constants";
import { Loading, Popup, Sidebar } from "@/components/layouts";

import { productsData, productsFetches } from "@/store/products";
import { ordersData, ordersFetches } from "@/store/orders";
import { marketsData, marketsFetches } from "@/store/markets";

import "@/style/global.scss";
import { AppRoutes } from "./components";
import { If } from "@/components/helpers";
import { useLoading, usePopup } from "@/utils";

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
  //  if (sliceStates.some((obj) => obj === statuses.LOADING)) {

  //  }
 }, [sliceStatuses, dispatch]);

 //  useEffect(() => {
 //   console.log(sliceStates);
 //   if (sliceStates.some((obj) => obj.message !== null)) {
 //    setPopup(sliceStates.find((obj) => obj.message !== null));
 //   }
 //  }, [sliceStates, dispatch]);

 // if (sliceStates.includes(statuses.LOADING)) {
 // return <h2>every..</h2>;
 // }
 //  if (sliceStates.some((obj) => obj.status === statuses.LOADING)) {
 //   return <h2>laddar..</h2>;
 //  }

 // if (sliceStates.some((obj) => obj.message !== null)) {
 //   const theOne = sliceStates.find((obj) => obj.message !== null)
 //   return <Popup message={theOne?.message} page={theOne?.string} />;
 // }

 // if (marketsMessage !== null) {
 //   return <Popup message={marketsMessage} page={"markets"} />
 // }
 if (isLoading) {
  return loadingComponent;
 }

 return (
  <>
   {/* <If condition={!!isLoading}>{loadingComponent}</If> */}
   <If condition={!!isPopup}>{popupComponent}</If>

   <Router>
    <Sidebar />
    <AppRoutes />
   </Router>
  </>
 );
};
