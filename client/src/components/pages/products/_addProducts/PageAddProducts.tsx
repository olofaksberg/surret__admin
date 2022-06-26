/** @format */

// imports
// - general
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// - components
import { ProductsAdded } from "./components";
import {
 ButtonBack,
 ButtonMain,
 InputImage,
 InputNumber,
 InputSelect,
 InputText,
 InputTextarea,
} from "@/components/generals";
import { If } from "@/components/helpers";
// - config
import {
 productCategories,
 clientEndpoints,
 statuses,
 buttonMainTypes,
} from "@/constants";
// - constants
// - utils
import { useHandleProducts } from "../utils/useHandleProducts/useHandleProducts";
// - utils
import { imageSource } from "@/utils";
// - store
import { productsActions, productsData } from "@/store/products";
// - style
import { Styled } from "./pageAddProducts.styled";
import { IPageAddProductsProps } from "./pageAddProducts.types";
// ---

export const PageAddProducts = (props: IPageAddProductsProps) => {
 const dispatch = useDispatch();
 const navigate = useNavigate();

 const { newProduct, newProducts, productsStatus } = useSelector(productsData);

 const {
  setBalance,
  setCategory,
  setContent,
  setImg,
  setName,
  setPrice,
  resetNewProduct,
 } = useSelector(productsActions);

 const { add, failMessage, ref } = useHandleProducts();

 useEffect(() => {
  dispatch(resetNewProduct(null));
 }, []);

 if (productsStatus === statuses.LOADING) {
  return <h2>Laddar..</h2>;
 }
 return (
  <Styled.Section {...props}>
   {/* back button */}
   <ButtonBack
    text={"produkter"}
    action={() => navigate(clientEndpoints().PRODUCTS.MAIN)}
   />

   {/* added products */}
   <If condition={newProducts.length > 0}>
    <ProductsAdded />
   </If>

   {/* form */}
   <section className="form flex FD-C AI-C p-left-7 p-right-7">
    <h1>Ny produkt</h1>
    <InputImage
     text={"Välj bild"}
     imageSrc={imageSource(newProduct)}
     reference={ref}
     action={(ev, file) =>
      dispatch(setImg({ imgURI: ev.target.result, img: file }))
     }
    />
    <InputText
     name={"name"}
     label={"Namn"}
     reference={ref}
     action={(e) => dispatch(setName(e.target.value))}
    />
    <InputNumber
     name={"balance"}
     label={"Lagersaldo"}
     reference={ref}
     action={(e) => dispatch(setBalance(e.target.value))}
    />
    <InputNumber
     name={"price"}
     label={"Pris"}
     reference={ref}
     action={(e) => dispatch(setPrice(e.target.value))}
    />

    <div className="form__under-wrapper flex FG-2 w-100 m-top-2">
     <InputSelect
      label={"- VÄLJ KATEGORI -"}
      items={productCategories}
      value={newProduct.category}
      reference={ref}
      action={(e) => dispatch(setCategory(e.target.textContent))}
     />
     <InputTextarea
      name={"content"}
      label={"Innehållsförteckning"}
      value={newProduct.content}
      reference={ref}
      action={(e) => dispatch(setContent(e.target.value))}
     />
    </div>

    {/* fail message */}
    <If condition={failMessage}>
     <div className="field-missing">
      <i className="fa-solid fa-circle-exclamation"></i>Ett obligatoriskt fält
      saknar värde
     </div>
    </If>

    {/* add button */}
    <ButtonMain
     buttonType={buttonMainTypes.ADD}
     text="lägg till"
     action={() => add()}
     customStyle={"align-self: center;"}
    />
   </section>
  </Styled.Section>
 );
};
