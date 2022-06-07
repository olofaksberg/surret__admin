/** @format */

// imports
// - general
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// - components
import { MarketsAdded } from "./components";
import { AddMarketProducts, ProductListed } from "@/components/pages";
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
// - constants
import { buttonMainTypes, clientEndpoints, statuses } from "@/constants";
// - utils
import { useHandleMarkets } from "../utils";
import { imageSource } from "@/utils";
// - store
import {
 marketsActions,
 marketsData,
} from "@/store/markets";
// - style
import { Styled } from "./pageAddMarkets.styled";
import { IPageAddMarketsProps } from "./pageAddMarkets.types";
// ---

export const PageAddMarkets = (props: IPageAddMarketsProps) => {
 const dispatch = useDispatch();
 const navigate = useNavigate();

 const { newMarkets, newMarket, 
  // marketsStatus
 } = useSelector(marketsData);

 const {
  resetNewMarket,
  setImg,
  setName,
  setAddress,
  setDate,
  setStartTime,
  setEndTime,
  setProducts,
 } = useSelector(marketsActions);

 const { add, failMessage, ref, showProductsState, isAdded } =
  useHandleMarkets();

 useEffect(() => {
  dispatch(resetNewMarket(null));
 }, []);

//  if (marketsStatus === statuses.LOADING) {
//   return <h2>lägger upp murket..</h2>;
//  }

 return (
  <Styled.Section {...props}>
   <ButtonBack
    text={"marknader"}
    action={() => navigate(clientEndpoints().MARKETS.MAIN)}
   />

   {/* added markets */}
   <If condition={newMarkets.length > 0}>
    <MarketsAdded />
   </If>

   {/* form */}
   <section className="form flex FD-C AI-C p-left-7 p-right-7">
    <h1 className="TA-C">Ny marknad</h1>
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
     reference={ref}
     action={(e) => dispatch(setName(e.target.value))}
    />
    <InputText
     name={"address"}
     label={"Adress"}
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
      {/* input starttime */}
      <InputTime
       name={"start"}
       label={"Starttid:"}
       value={newMarket.date.time.start}
       reference={ref}
       action={(e) => dispatch(setStartTime(e.target.value))}
      />
      {/* input endtime */}
      <InputTime
       name={"end"}
       label={"Sluttid:"}
       value={newMarket.date.time.end}
       reference={ref}
       action={(e) => dispatch(setEndTime(e.target.value))}
      />
     </div>

     {/* market products */}
     <If condition={newMarket.products.length > 0}>
      <div className="products-info w-50">
       <h3>Produkter:</h3>

       <ButtonToggle
        text={
         showProductsState.showProducts
          ? "Dölj -"
          : `Visa (${newMarket.products.length}) +`
        }
        action={() =>
         showProductsState.setShowProducts(!showProductsState.showProducts)
        }
       />

       <If condition={showProductsState.showProducts}>
        <div className="flex FD-C FG-1 p-left-1 p-top-1">
         {newMarket.products.map((p:any, i:number) => {
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

    {/* add market products */}
    <AddMarketProducts />

    <hr />

    {/* fail message */}
    <If condition={failMessage}>{failMessage}</If>

    {/* add button */}
    <ButtonMain
     buttonType={buttonMainTypes.ADD}
     text="lägg till marknad"
     action={() => add()}
     customStyle={"align-self: center;"}
    />
   </section>
  </Styled.Section>
 );
};
