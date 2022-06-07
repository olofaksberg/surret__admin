/** @format */

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ProductAlt, ProductsNav } from "@/components/pages/products";
import { ButtonMain, ButtonToggle } from "@/components/generals";
import { If } from "@/components/helpers";

import { buttonMainTypes } from "@/constants";

import { useHandleProducts } from "../../../products/utils";
import { useHandleMarkets } from "../../utils";

import { marketsActions, marketsData } from "@/store/markets";

import { Styled } from "./addMarketProducts.styled";
import { IAddMarketProductsProps } from "./addMarketProducts.types";

export const AddMarketProducts = (props: IAddMarketProductsProps) => {
 const dispatch = useDispatch();

 const [showProducts, setShowProducts] = useState<boolean>(false);

 const { newMarket } = useSelector(marketsData);
 const { setProducts } = useSelector(marketsActions);
 const { products, productsFilterState } = useHandleProducts();

 const { isAdded } = useHandleMarkets();

 return (
  <Styled.Section>
   <ButtonToggle
    text={showProducts ? "Dölj -" : "Lägg till produkter +"}
    action={() => setShowProducts(!showProducts)}
    customStyle={"font-size: 1rem;"}
   />

   <If condition={showProducts}>
    <div className="flex FD-C show-ani">
     <h2 className="TA-C m-bottom-1">Lägg till produkter</h2>
     <ProductsNav productsFilterState={productsFilterState} />
     <div className="flex FG-3 JC-C FW-wrap p-1">
      {products
       .filter((d) => !newMarket.products.includes(d))
       .map((p, i) => {
        return (
         <div className="flex FD-C AI-C">
          <ProductAlt product={p} />

          <ButtonMain
           buttonType={buttonMainTypes.ADD}
           text="Lägg till"
           action={() =>
            dispatch(
             setProducts({
              isAdded: isAdded(newMarket, p),
              product: p,
             })
            )
           }
           customStyle={"align-self: center; margin-top: 0.7rem;"}
          />
         </div>
        );
       })}
     </div>

     <If
      condition={
       products.filter((d) => !newMarket.products.includes(d)).length < 1
      }
     >
      <i className="TA-C m-top-1">Inga produkter hittade</i>
     </If>
    </div>
   </If>
  </Styled.Section>
 );
};
