/** @format */

import { useState } from "react";
import { useDispatch } from "react-redux";

import { ProductListed } from "@/components/pages/products";
import { ButtonMain, ButtonToggle } from "@/components/generals";
import { If } from "@/components/helpers";

import { buttonMainTypes, IproductModel, orderCategories } from "@/constants";

import { useHandleOrders } from "../../utils";

import { ordersFetches } from "@/store/orders";

import { Styled } from "./order.styled";
import { IOrderProps } from "./order.types";

export const Order = (props: IOrderProps) => {
 const { order } = props;
 const dispatch = useDispatch();

 const [showFullInfo, setShowFullInfo] = useState(false);
 const { timeStamps } = useHandleOrders();

 const { fetchUpdateOrderStatus } = ordersFetches;

 return (
  <Styled.Section {...props}>
   <h1>Order_ID: {order._id}</h1>

   {timeStamps(order.status).map((d, i) => {
    return (
     <div>
      <label>{d.label}</label>
      <span>{d.time}</span>
     </div>
    );
   })}

   <ButtonToggle
    text={showFullInfo ? "MINDRE INFO -" : "MER INFO +"}
    action={() => setShowFullInfo(!showFullInfo)}
    customStyle="margin: 1rem 0;"
   />

   <div className="flex FD-C FG-3 p-left-1">
    <If condition={showFullInfo}>
     <div className="flex FD-C FG-3 show-ani">
      <div>
       <h3>Kund:</h3>
       <div className="customer-info flex FD-C p-left-1">
        <div>
         <label>Namn:</label>
         <span> {order.customer.name}</span>
        </div>
        <div className="address flex">
         <label>Adress:</label>
         <div>
          <div>{order.customer.address}</div>
          <div>
           {order.customer.postnumber} {order.customer.city.toUpperCase()}
          </div>
         </div>
        </div>
        <div>
         <label>Kontakt:</label>
         <span> {order.customer.contact}</span>
        </div>
       </div>
      </div>

      <div className="products-info">
       <h3>Produkter:</h3>
       <div className="flex FD-C FG-1 p-left-1 p-top-1">
        {order.products.map(
         (p: { product: IproductModel; amount: number }, i: number) => {
          return (
           <ProductListed
            product={p.product}
            last={i !== order.products.length - 1}
            amount={p.amount}
           />
          );
         }
        )}
       </div>
      </div>
     </div>
    </If>

    <If condition={"comment" in order.customer}>
     <div className="comment flex pos-R">
      <i className="fa-solid fa-circle-exclamation pos-A"></i>
      <div>
       <h3>Kundkommentar:</h3>
       <div className="p-left-1">{order.customer.comment}</div>
      </div>
     </div>
    </If>
   </div>

   <If condition={order.status.orderStatus === orderCategories.ACTIVE}>
    <ButtonMain
     buttonType={buttonMainTypes.CONFIRM}
     text="arkivera"
     action={() =>
      dispatch(fetchUpdateOrderStatus([order._id, orderCategories.OLD]))
     }
     customStyle="margin-top: 1.8rem;"
    />
   </If>
  </Styled.Section>
 );
};
