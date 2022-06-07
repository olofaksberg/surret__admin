/** @format */

// imports
// - general
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// - components
import { OrdersNav } from "./components";
import { Order } from "../components";
import { Header, Popup } from "../../../layouts";
import { If } from "../../../helpers";
// - config
// - constants
import {
 clientEndpoints,
 orderCategories,
 statuses,
} from "../../../../constants";
// - utils
// - store
import { ordersFetches, ordersData } from "@/store/orders";
import { navActions } from "../../../../store/nav/navSlice";
// - style
import { Styled } from "./pageMainOrders.styled";
import { IPageMainOrdersProps } from "./pageMainOrders.types";

import { useOrders } from "../utils/hooks";
// ---

export const PageMainOrders = (props: IPageMainOrdersProps) => {
 const dispatch = useDispatch();
 const { fetchUpdateOrderSeenStatus } = ordersFetches;
 const [ordersFilter, setOrdersFilter] = useOrders(orderCategories.ACTIVE);
 const { ordersStatus, orders } = useSelector(ordersData);
 const { setActive } = useSelector(navActions);

 const unseen = orders
  .filter((d: any) => !d.status.seen)
  .map((d: any) => d._id);

 useEffect(() => {
  dispatch(setActive(clientEndpoints().ORDERS.MAIN));
  if (unseen.length > 0) {
   dispatch(fetchUpdateOrderSeenStatus());
  }
 }, [ordersStatus]);

 if (ordersStatus !== statuses.SUCCEEDED) {
  return <h2>hämtar ordrar..</h2>;
 }
 console.log(orders);

 return (
  <Styled.Section {...props}>
   {/* popup */}
   {/* <If condition={ordersMessage}>
        <Popup message={ordersMessage} page={"orders"} />
      </If> */}

   {/* header */}
   <Header title="Ordrar" />

   {/* orders nav */}
   <OrdersNav ordersState={{ ordersFilter, setOrdersFilter }} />

   {/* orders */}
   <section className="orders-container flex FD-C FG-2">
    {orders
     .filter((d: any) => d.status.orderStatus === ordersFilter)
     .map((d: any) => {
      return <Order order={d} />;
     })}
   </section>

   <If condition={orders.length < 1}>
    <div className="TA-C m-top-3">
     <i>Inga ordrar hittade</i>
    </div>
   </If>
  </Styled.Section>
 );
};

// const OrdersNav = ({ ordersFilterState }) => {
//   return (
//     <div className="orders-nav flex JC-C FG-2">
//       <h3
//         className={`orders-nav-item pointer ${
//           ordersFilterState.ordersFilter === orderTypes.ACTIVE ? "active" : ""
//         }`}
//         onClick={() => ordersFilterState.setOrdersFilter(orderTypes.ACTIVE)}
//       >
//         Mottagna ordrar
//       </h3>
//       <h3
//         className={`orders-nav-item pointer ${
//           ordersFilterState.ordersFilter === orderTypes.OLD ? "active" : ""
//         }`}
//         onClick={() => ordersFilterState.setOrdersFilter(orderTypes.OLD)}
//       >
//         Arkiverade ordrar
//       </h3>
//     </div>
//   );
// };
