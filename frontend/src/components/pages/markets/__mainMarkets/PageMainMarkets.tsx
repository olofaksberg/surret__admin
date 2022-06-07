/** @format */

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Market } from "../components";
import { Header } from "@/components/layouts";
import { If } from "@/components//helpers";

import { clientEndpoints } from "@/constants";

import { marketsData } from "@/store/markets";
import { navActions } from "@/store/nav";

import { Styled } from "./pageMainMarkets.styled";
import { IPageMainMarketsProps } from "./pageMainMarkets.types";

export const PageMainMarkets = (props: IPageMainMarketsProps) => {
 const dispatch = useDispatch();

 const { markets } = useSelector(marketsData);
 const { setActive } = useSelector(navActions);

 useEffect(() => {
  dispatch(setActive(clientEndpoints().MARKETS.MAIN));
 }, []);

 return (
  <Styled.Section {...props}>
   <Header title="Marknader" buttonRoute={clientEndpoints().MARKETS.ADD} />

   <div className="flex FD-C FG-3">
    {markets.map((m: any) => {
     return <Market market={m} editable={true} />;
    })}
   </div>

   <If condition={markets.length < 0}>
    <div className="TA-C m-top-3">
     <i>Inga marknader hittade</i>
    </div>
   </If>
  </Styled.Section>
 );
};
