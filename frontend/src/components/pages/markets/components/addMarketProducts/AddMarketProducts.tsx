/** @format */

// imports
// - general
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// - components
import { ProductAlt, ProductsNav } from "../../../products";
// import { ButtonMain, ButtonToggle } from "../../../../generals";
import { ButtonMain, ButtonToggle } from "../../../../generals";
import { If } from "../../../../helpers";
// - utils
import { useHandleProducts } from "../../../products/utils";
import { useHandleMarkets } from "../../utils";
// - store
import {
 marketsActions,
 marketsData,
} from "../../../../../store/markets/marketsSlice";
// - style
import { Styled } from "./addMarketProducts.styled";
import { IAddMarketProductsProps } from "./addMarketProducts.types";
import { buttonMainTypes } from "../../../../../constants";
// ---

export const AddMarketProducts = (props: IAddMarketProductsProps) => {
 const dispatch = useDispatch();
 const { newMarket } = useSelector(marketsData);
 const { setProducts } = useSelector(marketsActions);
 const { products, productsFilterState } = useHandleProducts();

 const [showProducts, setShowProducts] = useState(false);

 const { isAdded } = useHandleMarkets();

 return (
  <Styled.Section>
   {/* show toggler */}

   <ButtonToggle
    text={showProducts ? "Dölj -" : "Lägg till produkter +"}
    action={() => setShowProducts(!showProducts)}
    customStyle={"font-size: 1rem;"}
   />

   {/* products container */}
   <If condition={showProducts}>
    <div className="flex FD-C show-ani">
     {/* header */}
     <h2 className="TA-C m-bottom-1">Lägg till produkter</h2>
     {/* nav */}
     <ProductsNav productsFilterState={productsFilterState} />
     {/* products */}
     <div className="flex FG-3 JC-C FW-wrap p-1">
      {products
       .filter((d) => !newMarket.products.includes(d))
       .map((p, i) => {
        return (
         <div className="flex FD-C AI-C">
          <ProductAlt product={p} />

          <ButtonMain buttonType={buttonMainTypes.ADD} text="Lägg till" action={() =>
            dispatch(
             setProducts({
              isAdded: isAdded(newMarket, p),
              product: p,
             })
            )
           } customStyle={"align-self: center;"} />
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
     <hr />
    </div>
   </If>
  </Styled.Section>
 );
};
