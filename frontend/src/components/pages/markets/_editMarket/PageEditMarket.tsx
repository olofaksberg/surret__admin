/** @format */

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { AddMarketProducts } from "../components";
import { ProductListed } from "@/components/pages/products";
import {
 ButtonBack,
 ButtonMain,
 ButtonToggle,
 InputDate,
 InputImage,
 InputText,
 InputTime,
} from "@/components/generals";
import { If } from "@/components/helpers";

import { buttonMainTypes, clientEndpoints } from "@/constants";

import { useHandleMarkets } from "../utils";
import { imageSource } from "@/utils";

import { marketsActions, marketsData } from "@/store/markets";

import { Styled } from "./pageEditMarket.styled";
import { IPageEditMarketProps } from "./pageEditMarket.types";
import { Loading } from "@/components/layouts";

export const PageEditMarket = (props: IPageEditMarketProps) => {
 const dispatch = useDispatch();
 const navigate = useNavigate();

 const { id } = useParams();
 const { newMarket } = useSelector(marketsData);

 const {
  setMarketToUpdate,
  setImg,
  setName,
  setAddress,
  setDate,
  setStartTime,
  setEndTime,
  setProducts,
 } = useSelector(marketsActions);

 const { failMessage, update, remove, ref, showProductsState, isAdded } =
  useHandleMarkets();

 useEffect(() => {
  dispatch(setMarketToUpdate(id));
 }, []);

 if (newMarket === undefined) {
  return <Loading />;
 }

 return (
  <Styled.Section {...props}>
   <ButtonBack
    text={"marknader"}
    action={() => navigate(clientEndpoints().MARKETS.MAIN)}
   />

   <section className="form flex FD-C AI-C p-left-7 p-right-7">
    <h1 className="TA-C">Redigera marknad</h1>
    <InputImage
     text={"Välj bild"}
     imageSrc={imageSource(newMarket)}
     reference={ref}
     action={(ev, file) =>
      dispatch(setImg({ imgURI: ev.target.result, img: file }))
     }
    />
    <InputText
     name={"name"}
     label={"Namn"}
     value={newMarket.name}
     reference={ref}
     action={(e) => dispatch(setName(e.target.value))}
    />
    <InputText
     name={"address"}
     label={"Adress"}
     value={newMarket.address}
     reference={ref}
     action={(e) => dispatch(setAddress(e.target.value))}
    />

    <div className="flex w-100 m-top-2">
     <div className="w-50">
      <InputDate
       name={"date"}
       label={"Datum:"}
       value={newMarket.date.date}
       reference={ref}
       action={(e) => dispatch(setDate(e.target.value))}
      />
      <InputTime
       name={"start"}
       label={"Starttid:"}
       value={newMarket.date.time.start}
       reference={ref}
       action={(e) => dispatch(setStartTime(e.target.value))}
      />
      <InputTime
       name={"end"}
       label={"Sluttid:"}
       value={newMarket.date.time.end}
       reference={ref}
       action={(e) => dispatch(setEndTime(e.target.value))}
      />
     </div>

     <If condition={newMarket.products.length > 0}>
      <div className="products-info w-50">
       <h3>Produkter:</h3>

       <ButtonToggle
        text={
         showProductsState.showProducts
          ? "Dölj -"
          : `Visa (${newMarket.products.length}) +`
        }
        action={() => {
         showProductsState.setShowProducts(!showProductsState.showProducts);
        }}
       />

       <If condition={showProductsState.showProducts}>
        <div className="flex FD-C FG-1 p-left-1 p-top-1">
         {newMarket.products.map((p: any, i: number) => {
          return (
           <div className="flex FG-1 pos-R">
            <ButtonMain
             buttonType={buttonMainTypes.REMOVE}
             text="ta bort"
             action={() =>
              dispatch(
               setProducts({
                isAdded: isAdded(newMarket, p),
                product: p,
               })
              )
             }
             customStyle={
              "margin-top: 0.9rem; position: absolute; right: calc(100% + 1rem);"
             }
            />
            <ProductListed
             product={p}
             last={i !== newMarket.products.length - 1}
            />
           </div>
          );
         })}
        </div>
       </If>
      </div>
     </If>
    </div>

    <hr />

    <AddMarketProducts />

    <hr />

    <If condition={failMessage}>{failMessage}</If>

    <div className="flex FG-2">
     <ButtonMain
      buttonType={buttonMainTypes.CONFIRM}
      text="uppdatera"
      action={() => update(newMarket)}
      customStyle={"align-self: center;"}
     />

     <ButtonMain
      buttonType={buttonMainTypes.DELETE}
      text="radera"
      action={() => remove(newMarket)}
      customStyle={"align-self: center;"}
     />
    </div>
   </section>
  </Styled.Section>
 );
};
