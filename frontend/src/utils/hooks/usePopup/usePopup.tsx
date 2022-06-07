/** @format */

import { marketsActions, marketsData } from "@/store/markets";
import { ordersActions, ordersData } from "@/store/orders/ordersSlice";
import { productsActions, productsData } from "@/store/products/productsSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Popup } from "@/components/layouts";

export const usePopup = (initValue: any) => {
 const dispatch = useDispatch();

 const { productsMessage } = useSelector(productsData);
 const { ordersMessage } = useSelector(ordersData);
 const { marketsMessage } = useSelector(marketsData);

 const { resetMarketsMessage } = useSelector(marketsActions);
 const { resetProductsMessage } = useSelector(productsActions);
 const { resetOrdersMessage } = useSelector(ordersActions);

 const [popup, setPopup] = useState<false | JSX.Element>(initValue);

 const sliceStates = [productsMessage, ordersMessage, marketsMessage];

 const getAction = (page: any) => {
  switch (page) {
   case "products":
    dispatch(resetProductsMessage(null));
    break;
   case "markets":
    dispatch(resetMarketsMessage(null));
    break;
   case "orders":
    dispatch(resetOrdersMessage(null));
    break;
   default:
    break;
  }
 };

 useEffect(() => {
  if (sliceStates.some((obj) => obj !== null)) {
   setPopup(
    <Popup
     message={sliceStates.find((obj) => obj !== null)}
     action={() => getAction(sliceStates.find((obj) => obj !== null).page)}
    />
   );
  } else {
   setPopup(false);
  }
 }, [productsMessage, ordersMessage, marketsMessage]);

 return [!!popup, popup];
};
