/** @format */

// imports
// - general
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// - components
import { ProductAlt } from "../../../components";
import { ButtonMain, ButtonToggle } from "../../../../../generals";
import { If } from "../../../../../helpers";
// - constants
import { buttonMainTypes, clientEndpoints } from "../../../../../../constants";
// - utils
import { useHandleProducts } from "../../../utils";
// - store
import {
 productsActions,
 productsData,
 productsFetches,
} from "@/store/products";
// - style
import { Styled } from "./productsAdded.styled";
import { IproductsAddedProps } from "./productsAdded.types";
// ---

export const ProductsAdded = (props: IproductsAddedProps) => {
 const dispatch = useDispatch();
 const navigate = useNavigate();
 const { newProducts } = useSelector(productsData);
 const { deleteNewProduct } = useSelector(productsActions);
 const { fetchCreateProducts } = productsFetches;
 const { showNewProductsState } = useHandleProducts();

 const confirm = () => {
  const newImages: any = [];
  const productsSendData = newProducts.map((d: any, i: number) => {
   const { imgURI, img, ...rest } = d;
   newImages.push(img);
   return rest;
  });
  try {
   dispatch(
    fetchCreateProducts({
     data: productsSendData,
     images: newImages,
    })
   );
  } catch (err) {
   console.log(err);
  } finally {
   navigate(clientEndpoints().PRODUCTS.MAIN);
  }
 };

 return (
  <Styled.Section {...props}>
   {/* header */}
   <div className="confirm-header">
    <span className="FW-bold">{newProducts.length}</span> produkt
    {newProducts.length > 1 ? "er" : ""} väntar på godkännande{" "}
   </div>
   <ButtonToggle
    text={showNewProductsState.showNewProducts ? "Dölj -" : "Visa +"}
    action={() =>
     showNewProductsState.setShowNewProducts(
      !showNewProductsState.showNewProducts
     )
    }
    customStyle={"margin-bottom: 0.5rem;"}
   />

   {/* products */}
   <If condition={showNewProductsState.showNewProducts}>
    <div className="flex JC-C FW-wrap FG-2 m-top-1 m-bottom-1">
     {newProducts.map((p: any, i: number) => {
      return (
       <div className="flex FD-C AI-C">
        <ProductAlt product={p} />

        <ButtonMain
         buttonType={buttonMainTypes.REMOVE}
         text="ta bort"
         action={() => dispatch(deleteNewProduct(i))}
         customStyle={"margin-top: 1rem; align-self: center;"}
        />
       </div>
      );
     })}
    </div>
   </If>

   {/* confirm button */}
   <ButtonMain
    buttonType={buttonMainTypes.CONFIRM}
    text="godkänn produkter"
    action={confirm}
    customStyle={"margin-top: 1rem; align-self: center;"}
   />
  </Styled.Section>
 );
};
