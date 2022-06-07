/** @format */

// imports
// - config
import { ordersData } from "@/store/orders/ordersSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { orderCategories } from "../../../../../../constants";
import { useHandleOrders } from "../../../utils";
// - style
import { Styled } from "./ordersNav.styled";
import { IOrdersNavProps } from "./ordersNav.types";
// ---

export const OrdersNav = (props: IOrdersNavProps) => {
 const { ordersState } = props;

 const { oldFetched } = useSelector(ordersData);

 return (
  <Styled.Nav {...props}>
   <h3
    className={`orders-nav-item pointer ${
     ordersState.ordersFilter === orderCategories.ACTIVE ? "active" : ""
    }`}
    onClick={() => ordersState.setOrdersFilter(orderCategories.ACTIVE)}
   >
    Mottagna ordrar
   </h3>
   <h3
    className={`orders-nav-item pointer ${
     ordersState.ordersFilter === orderCategories.OLD ? "active" : ""
    }`}
    onClick={() => ordersState.setOrdersFilter(orderCategories.OLD)}
   >
    {!oldFetched ? "Hämta arkiverade ordrar" : "Arkiverade ordrar"}
    {/* Arkiverade ordrar */}
   </h3>
  </Styled.Nav>
 );
 // return (
 //   <Styled.Nav {...props}>
 //     <h3
 //       className={`orders-nav-item pointer ${
 //         ordersFilterState.ordersFilter === orderCategories.ACTIVE ? "active" : ""
 //       }`}
 //       onClick={() => ordersFilterState.setOrdersFilter(orderCategories.ACTIVE)}
 //     >
 //       Mottagna ordrar
 //     </h3>
 //     <h3
 //       className={`orders-nav-item pointer ${
 //         ordersFilterState.ordersFilter === orderCategories.OLD ? "active" : ""
 //       }`}
 //       onClick={() => ordersFilterState.setOrdersFilter(orderCategories.OLD)}
 //     >
 //       Arkiverade ordrar
 //     </h3>
 //   </Styled.Nav>
 // );
};
