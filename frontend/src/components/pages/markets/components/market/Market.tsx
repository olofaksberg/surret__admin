/** @format */

// imports
// - general
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { ProductListed } from "@/components/pages/products";
import { ButtonMain, ButtonToggle, Image } from "@/components/generals";
import { If } from "@/components/helpers";

import { buttonMainTypes, clientEndpoints } from "@/constants";

import { useHandleMarkets } from "../../utils";

import { marketsActions } from "@/store/markets";

import { Styled } from "./market.styled";
import { ImarketProps } from "./market.types";

export const Market = (props: ImarketProps) => {
 const { market, editable, index } = props;

 const navigate = useNavigate();
 const dispatch = useDispatch();

 const { deleteNewMarket } = useSelector(marketsActions);

 const { showProductsState } = useHandleMarkets();

 return (
  <Styled.Section {...props}>
   <div className="flex FD-C JC-SB">
    <div className="flex FD-C FG-2">
     <h1 className="market-h1">{market.name}</h1>

     <ul className="market-info flex FD-C">
      <li>
       <label>Datum: </label>
       <span>{market.date.date}</span>
      </li>
      <li>
       <label>Tid: </label>
       <span>
        {market.date.time.start} - {market.date.time.end}
       </span>
      </li>
      <li>
       <label>Adress: </label>
       <span>{market.address}</span>
      </li>
     </ul>

     <If condition={market?.products && market.products.length > 0}>
      <div className="products-info">
       <h3>Produkter:</h3>

       <ButtonToggle
        text={
         showProductsState.showProducts
          ? "Dölj -"
          : `Visa (${market.products?.length}) +`
        }
        action={() => {
         showProductsState.setShowProducts(!showProductsState.showProducts);
        }}
       />

       <If condition={showProductsState.showProducts}>
        <div className="flex FD-C FG-1 p-left-1 p-top-1">
         {market.products?.map((p: any, i: number) => {
          return (
           <ProductListed
            product={p}
            last={market.products && i !== market.products.length - 1}
           />
          );
         })}
        </div>
       </If>
      </div>
     </If>
    </div>

    <If condition={!!editable}>
     <ButtonMain
      buttonType={buttonMainTypes.EDIT}
      text={"redigera"}
      action={() => navigate(clientEndpoints(market._id).MARKETS.EDIT)}
      customStyle="margin-top: 1.5rem;"
     />
    </If>

    <If condition={!editable}>
     <ButtonMain
      buttonType={buttonMainTypes.REMOVE}
      text={"ta bort"}
      action={() => dispatch(deleteNewMarket(index))}
      customStyle="margin-top: 1.5rem;"
     />
    </If>
   </div>

   <Image obj={market} customStyle={"align-self: start"} />
  </Styled.Section>
 );
};
