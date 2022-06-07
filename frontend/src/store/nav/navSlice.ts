/** @format */

// imports
// - general
import { createSlice } from "@reduxjs/toolkit";

// - utils
import { clientEndpoints } from "../../constants";

import { IinitState } from "./navSlice.types"
import { stateActions } from "./reducers"

// - config
// ---


const initialState: IinitState = {
  active: null,
  navLinks: [
    {
      text: "Produkter",
      endpoint: clientEndpoints().PRODUCTS.MAIN,
      notification: { main: null, onHover: null },
    },
    {
      text: "Ordrar",
      endpoint: clientEndpoints().ORDERS.MAIN,
      notification: { main: null, onHover: null },
    },
    {
      text: "Marknader",
      endpoint: clientEndpoints().MARKETS.MAIN,
      notification: { main: null, onHover: null },
    },
  ],
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: stateActions,
});

// export actions
export const navActions = () => {
  const origin = navSlice.actions;
  return {
    setActive: origin.setActive,
    setNotifications: origin.setNotifications,
  };
};

// export data
export const navData = (state: any) => {
  const origin = state.nav;
  return {
    active: origin.active,
    navLinks: origin.navLinks,
  };
};

export default navSlice.reducer;
