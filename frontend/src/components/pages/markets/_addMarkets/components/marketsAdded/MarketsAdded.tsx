/** @format */

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Market } from "@/components/pages";
import { ButtonMain, ButtonToggle } from "@/components/generals";
import { If } from "@/components/helpers";

import { buttonMainTypes, clientEndpoints } from "@/constants";

import { marketsData, marketsFetches } from "@/store/markets";

import { Styled } from "./marketsAdded.styled";
import { IMarketsAddedProps } from "./marketsAdded.types";

export const MarketsAdded = (props: IMarketsAddedProps) => {
 const dispatch = useDispatch();
 const navigate = useNavigate();

 const [showNewMarkets, setShowNewMarkets] = useState<boolean>(false);

 const { fetchCreateMarkets } = marketsFetches;
 const { newMarkets } = useSelector(marketsData);

 const confirm = async () => {
  const images: any = [];
  const marketsSendData = newMarkets.map((d: any, i: number) => {
   const { imgURI, img, ...rest } = d;
   images.push(img);
   return rest;
  });
  try {
   dispatch(
    fetchCreateMarkets({
     data: marketsSendData,
     images: images,
    })
   );
  } catch (err) {
   console.log(err);
  } finally {
   navigate(clientEndpoints().MARKETS.MAIN);
  }
 };

 return (
  <Styled.Section {...props}>
   <div className="confirm-header TA-C">
    <span className="FW-bold FC-G-MD">{newMarkets.length}</span> marknad
    {newMarkets.length > 1 ? "er" : ""} väntar på godkännande{" "}
   </div>
   <ButtonToggle
    text={showNewMarkets ? "Dölj -" : "Visa +"}
    action={() => setShowNewMarkets(!showNewMarkets)}
    customStyle={"margin-bottom: 0.5rem;"}
   />

   <If condition={showNewMarkets}>
    <div className="show-ani flex FG-3 FD-C m-top-1 m-bottom-1">
     {newMarkets.map((m: any, i: number) => {
      return (
       <div className="">
        <Market index={i} market={m} editable={false} />
       </div>
      );
     })}
    </div>
   </If>

   <ButtonMain
    buttonType={buttonMainTypes.CONFIRM}
    text={`godkänn marknad${newMarkets.length > 1 ? "er" : ""}`}
    action={confirm}
    customStyle={"margin-top: 1rem; align-self: center;"}
   />
  </Styled.Section>
 );
};
