/** @format */

// imports
// - general
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// - components
import { Market } from "../components";
import { Header, Popup } from "../../../layouts";
import { If } from "../../../helpers";
// - config
// import { strings } from "../../../../config";
// - contants
import { clientEndpoints, statuses } from "../../../../constants";
// - store
import { marketsData } from "../../../../store/markets/marketsSlice";
import { navActions } from "../../../../store/nav/navSlice";
// - style
import { Styled } from "./pageMainMarkets.styled";
import { IPageMainMarketsProps } from "./pageMainMarkets.types";
// ---

export const PageMainMarkets = (props: IPageMainMarketsProps) => {
 const dispatch = useDispatch();

 const {
  markets,
  // marketsStatus, marketsMessage
 } = useSelector(marketsData);
 const { setActive } = useSelector(navActions);

 // useEffect(() => {
 //   if (marketsStatus === statuses.IDLE) {
 //     dispatch(fetchMarkets());
 //   }
 // }, [marketsStatus, dispatch]);

 useEffect(() => {
  dispatch(setActive(clientEndpoints().MARKETS.MAIN));
 }, []);

 // if (marketsStatus === statuses.LOADING) {
 //   return <h2>hämtar markets..</h2>;
 // }

 return (
  <Styled.Section {...props}>
   {/* popup */}
   {/* <If condition={marketsMessage}>
        <Popup message={marketsMessage} page={"markets"} />
      </If> */}
   {/* header */}
   <Header title="Marknader" buttonRoute={clientEndpoints().MARKETS.ADD} />

   {/* markets */}
   <div className="flex FD-C FG-3">
    {/* {console.log(markets)} */}

    {markets.map((m: any) => {
     // console.log(m);

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
