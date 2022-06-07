/** @format */

// imports
// - general
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// - constants
import { clientEndpoints } from "../../../../constants";
// - utils
import { useArrayRef } from "../../../../utils";
// - store
import {
  marketsFetches,
  marketsActions,
} from "@/store/markets";

export const useHandleMarkets = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { fetchDeleteMarket, fetchUpdateMarket } = marketsFetches
  const { addNewMarket } = useSelector(marketsActions);

  const [failMessage, setFailMessage] = useState<boolean>(false);
  const [showNewMarkets, setShowNewMarkets] = useState<boolean>(false);
  const [showProducts, setShowProducts] = useState<boolean>(false);

  const [inputs, ref] = useArrayRef();

  const isAdded = (obj: any, p: any) => (obj.products.includes(p) ? true : false);

  const add = () => {
    const addable = !inputs
      .filter((d) => d.name !== "image")
      .some((i) => !i.value);
    if (addable) {
      dispatch(addNewMarket(null));
      inputs.forEach((input) => (input.value = ""));
      if (failMessage) {
        setFailMessage(false);
      }
    } else {
      setFailMessage(true
        //   <div className="field-missing" >
        // <i class="fa-solid fa-circle-exclamation" > </i>Ett obligatoriskt fält
        //     saknar värde
        // < /div>
      );
    }
  };

  const update = (obj: any) => {
    const addable = !inputs
      .filter((d) => d.name !== "image")
      .some((i) => !i.value);

    if (addable) {
      const { imgURI, img, ...rest } = obj;
      const marketSendData = rest;
      try {
        dispatch(fetchUpdateMarket({ data: marketSendData, image: img }));
      } catch (err) {
        throw err;
      } finally {
        navigate(clientEndpoints().MARKETS.MAIN);
      }
    } else {
      setFailMessage(true
        //   <div className="field-missing" >
        // <i class="fa-solid fa-circle-exclamation" > </i>Ett obligatoriskt fält
        //     saknar värde
        // < /div>
      );
    }
  };

  const remove = (obj: any) => {
    try {
      dispatch(fetchDeleteMarket(obj._id));
    } catch (err) {
      throw err;
    } finally {
      navigate(clientEndpoints().MARKETS.MAIN);
    }
  };

  return {
    failMessage,
    ref,

    isAdded,

    add,
    update,
    remove,

    showNewMarketsState: {
      showNewMarkets,
      setShowNewMarkets,
    },

    showProductsState: {
      showProducts,
      setShowProducts,
    },
  };
};
