/** @format */

// imports
// - general
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
// - components
import {
 ButtonBack,
 ButtonMain,
 InputImage,
 InputNumber,
 InputSelect,
 InputText,
 InputTextarea,
} from "../../../generals";
import { If } from "../../../helpers";
// - config
import { productCategories, clientEndpoints, statuses, buttonMainTypes } from "../../../../constants";
// - constants
// - utils
import { useHandleProducts } from "../utils/useHandleProducts";
// - utils
import { imageSource } from "../../../../utils";
// - store
import {
    productsActions,
    productsData,
   } from "../../../../store/products/productsSlice";
// - style
import { Styled } from "./pageEditProduct.styled";
import { IPageEditProductProps } from "./pageEditProduct.types";
// ---

export const PageEditProduct = (props: IPageEditProductProps) => {
 const dispatch = useDispatch();
 const navigate = useNavigate();
 const { id } = useParams();

 const { productsStatus, newProduct } = useSelector(productsData);

 const {
  setProductToUpdate,
  setName,
  setBalance,
  setPrice,
  setCategory,
  setContent,
  setImg,
 } = useSelector(productsActions);

 const { remove, update, ref, failMessage } = useHandleProducts();

 useEffect(() => {
  dispatch(setProductToUpdate(id));
 }, []);

 if (productsStatus === statuses.LOADING || newProduct === undefined) {
  return <h2>Uppdaterar produkt..</h2>;
 }

 return (
  <Styled.Section>
   {/* back button */}
   <ButtonBack
    text={"produkter"}
    action={() => navigate(clientEndpoints().PRODUCTS.MAIN)}
   />

   {/* form */}
   <section className="form flex FD-C AI-C p-left-7 p-right-7">
    <h1>Redigera produkt</h1>
    {/* input image */}
    <InputImage
     text={"Välj bild"}
     imageSrc={imageSource(newProduct)}
     reference={ref}
     action={(ev, file) =>
      dispatch(setImg({ imgURI: ev.target.result, img: file }))
     }
    />
    {/* input name */}
    <InputText
     name={"name"}
     label={"Namn"}
     value={newProduct.name}
     reference={ref}
     action={(e) => dispatch(setName(e.target.value))}
    />
    {/* input balance */}
    <InputNumber
     name={"balance"}
     label={"Lagersaldo"}
     value={newProduct.balance}
     reference={ref}
     action={(e) => dispatch(setBalance(e.target.value))}
    />
    {/* input price */}
    <InputNumber
     name={"price"}
     label={"Pris"}
     value={newProduct.price}
     reference={ref}
     action={(e) => dispatch(setPrice(e.target.value))}
    />

    <div className="form__under-wrapper flex FG-2 w-100 m-top-2">
     {/* input category */}
     <InputSelect
      label={"- VÄLJ KATEGORI -"}
      items={productCategories}
      value={newProduct.category}
      reference={ref}
      action={(e) => dispatch(setCategory(e.target.textContent))}
     />
     {/* input content */}
     <InputTextarea
      name={"content"}
      label={"Innehållsförteckning"}
      value={newProduct.content}
      reference={ref}
      action={(e) => dispatch(setContent(e.target.value))}
     />
    </div>

    {/* fail message */}
    <If condition={failMessage}>{failMessage}</If>

    <div className="flex FG-2">
     {/* update button */}
     <ButtonMain buttonType={buttonMainTypes.CONFIRM} text="uppdatera" action={update} customStyle={"align-self: center;"} />
     {/* delete button */}
     <ButtonMain buttonType={buttonMainTypes.DELETE} text="radera" action={remove} customStyle={"align-self: center;"} />
    </div>
   </section>
   {/* </section> */}
  </Styled.Section>
 );
};
