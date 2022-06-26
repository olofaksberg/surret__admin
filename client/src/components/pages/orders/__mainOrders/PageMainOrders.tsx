/** @format */

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { OrdersNav } from "./components";
import { Order } from "../components";

import { Header, Loading } from "@/components/layouts";
import { If } from "@/components/helpers";

import { clientEndpoints, orderCategories } from "@/constants";

import { useOrders } from "../utils";

import { ordersFetches, ordersData } from "@/store/orders";
import { navActions } from "@/store/nav";

import { Styled } from "./pageMainOrders.styled";
import { IPageMainOrdersProps } from "./pageMainOrders.types";

export const PageMainOrders = (props: IPageMainOrdersProps) => {
 const dispatch = useDispatch();

 const [ordersFilter, setOrdersFilter] = useOrders(orderCategories.ACTIVE);

 const { setActive } = useSelector(navActions);
 const { ordersStatus, orders } = useSelector(ordersData);
 const { fetchUpdateOrderSeenStatus } = ordersFetches;

 const unseen = orders
  .filter((d: any) => !d.status.seen)
  .map((d: any) => d._id);

 useEffect(() => {
  dispatch(setActive(clientEndpoints().ORDERS.MAIN));
  if (unseen.length > 0) {
   dispatch(fetchUpdateOrderSeenStatus());
  }
 }, [ordersStatus]);

 //  if (ordersStatus !== statuses.SUCCEEDED) {
 //   return <Loading />;
 //  }

 return (
  <Styled.Section {...props}>
   <Header title="Ordrar" />

   <OrdersNav ordersState={{ ordersFilter, setOrdersFilter }} />

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
