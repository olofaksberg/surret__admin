/** @format */

// imports
// - general
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// - components
import { ProductMain, ProductsNav } from "../components";
import { Header } from "@/components/layouts";
import { If } from "@/components/helpers";
// - config
// - constants
import { clientEndpoints, statuses } from "@/constants";
// - utils
import { useHandleProducts } from "../utils";
// - store
import { productsData } from "@/store/products";
import { navActions } from "@/store/nav";
// - style
import { Styled } from "./pageMainProducts.styled";
import { IPageMainProductsProps } from "./pageMainProducts.types";
// ---

export const PageMainProducts = (props: IPageMainProductsProps) => {
 const dispatch = useDispatch();

 const { productsStatus, productsMessage } = useSelector(productsData);
 const { setActive } = useSelector(navActions);

 const { products, productsFilterState } = useHandleProducts();

 useEffect(() => {
  dispatch(setActive(clientEndpoints().PRODUCTS.MAIN));
 }, []);

 if (productsStatus === statuses.LOADING) {
  return <h2>laddar..</h2>;
 }

 return (
  <Styled.Section {...props}>
   {/* popup */}
   {/* <If condition={productsMessage}>
    <Popup message={productsMessage} page={"products"} />
   </If> */}

   {/* header */}

   <Header title="produkter" buttonRoute={clientEndpoints().PRODUCTS.ADD} />

   {/* products nav */}
   <ProductsNav productsFilterState={productsFilterState} />

   {/* products */}
   <div className="flex FG-3 JC-C FW-wrap p-1">
    {products.map((d: any, i: number) => {
     return <ProductMain product={d} />;
    })}
   </div>
   <If condition={products.length < 1}>
    <div className="TA-C m-top-1">
     <i>Inga produkter hittade</i>
    </div>
   </If>
  </Styled.Section>
 );
};
