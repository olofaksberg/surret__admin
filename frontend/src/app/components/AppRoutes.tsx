/** @format */

import { Routes, Route } from "react-router-dom";

import {
 PageMainMarkets,
 PageMainProducts,
 PageMainOrders,
 PageAddMarkets,
 PageAddProducts,
 PageEditMarket,
 PageEditProduct,
 PageError,
} from "@/components/pages";
import { Redirect } from "@/components/helpers";

import { clientEndpoints, statuses } from "@/constants";

export const AppRoutes = () => {
 return (
  <Routes>
   <Route
    element={<PageMainProducts />}
    path={clientEndpoints().PRODUCTS.MAIN}
   />
   <Route element={<PageAddProducts />} path={clientEndpoints().PRODUCTS.ADD} />
   <Route
    element={<PageEditProduct />}
    path={clientEndpoints(":id").PRODUCTS.EDIT}
   />

   <Route element={<PageMainMarkets />} path={clientEndpoints().MARKETS.MAIN} />
   <Route element={<PageAddMarkets />} path={clientEndpoints().MARKETS.ADD} />
   <Route
    element={<PageEditMarket />}
    path={clientEndpoints(":id").MARKETS.EDIT}
   />

   <Route element={<PageMainOrders />} path={clientEndpoints().ORDERS.MAIN} />

   <Route
    element={<Redirect to={clientEndpoints().PRODUCTS.MAIN} />}
    path={"/"}
   />
   <Route element={<PageError status={statuses.NOTFOUND} />} path="*" />
  </Routes>
 );
};
