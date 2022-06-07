/** @format */

// imports
// - general
import { useState } from "react";
import { useDispatch } from "react-redux";
// - components
import { ProductListed } from "../../../products";
import { ButtonMain, ButtonToggle } from "../../../../generals";
import { If } from "../../../../helpers";
// - utils
import { useHandleOrders } from "../../utils/useHandleOrders";
// - store

import {
 buttonMainTypes,
 IproductModel,
 orderCategories,
} from "../../../../../constants";
// - style
import { Styled } from "./order.styled";
import { IOrderProps } from "./order.types";
import { ordersFetches } from "@/store/orders";
// ---

export const Order = (props: IOrderProps) => {
 const { order } = props;
 const { fetchUpdateOrderStatus } = ordersFetches;
 const dispatch = useDispatch();
 const { timeStamps } = useHandleOrders();
 const [showFullInfo, setShowFullInfo] = useState(false);

 console.log(order);

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

   {/* show toggler */}
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

      {/* order products */}
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
    {/* order.customer.comment  */}
    <If condition={"comment" in order.customer}>
     {/* <CustomerComment comment={`${order.customer.comment}`} /> */}
     <div className="comment flex pos-R">
      <i className="fa-solid fa-circle-exclamation pos-A"></i>

      <div>
       <h3>Kundkommentar:</h3>
       <div className="p-left-1">{order.customer.comment}</div>
      </div>
     </div>
    </If>
   </div>

   {/* edit status button */}
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

// const CustomerComment = ({comment: string}) => {
//  return (
//   <div className="comment flex pos-R">
//    <i className="fa-solid fa-circle-exclamation pos-A"></i>

//    <div>
//     <h3>Kundkommentar:</h3>
//     <div className="p-left-1">{comment}</div>
//    </div>
//   </div>
//  );
// };
