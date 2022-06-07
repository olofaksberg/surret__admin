// /** @format */

// // imports
// // - general
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// // - utils
// import { PROTECTED_GET, PROTECTED_POST } from "../../utils";

// import { apiEndpoints, statuses } from "../../constants";

// // - config
// import { orderCategories } from "../../constants";

// import { sortOrders } from "./utils/sortOrders/sortOrders";
// // ---

// // utils


// // fetches
// export const fetchOrders = createAsyncThunk("fetchOrders", async () => {
//   let res = await PROTECTED_GET(apiEndpoints().ORDERS.GET_ALL);
//   return res;
// });

// export const fetchActiveOrders = createAsyncThunk(
//   "fetchActiveOrders",
//   async () => {
//     let res = await PROTECTED_GET(apiEndpoints().ORDERS.GET_ACTIVE);
//     return res;
//   }
// );

// export const fetchOldOrders = createAsyncThunk("fetchOldOrders", async () => {
//   let res = await PROTECTED_GET(apiEndpoints().ORDERS.GET_OLD);
//   return res;
// });

// // export const fetchCreateOrders = createAsyncThunk(
// //   "fetchCreateOrders",
// //   async (newOrders) => {
// //     let res = await PROTECTED_POST(apiEndpoints().ORDERS.CREATE, newOrders);
// //     return res;
// //   }
// // );

// export const fetchUpdateOrderStatus = createAsyncThunk(
//   "fetchUpdateOrderStatus",
//   async (data: any) => {
//     let res = await PROTECTED_POST(apiEndpoints().ORDERS.UPDATE_STATUS, {
//       id: data[0],
//       updatedStatus: data[1],
//     });
//     return res;
//   }
// );

// export const fetchUpdateOrderSeenStatus = createAsyncThunk(
//   "fetchUpdateOrderSeenStatus",
//   async (data) => {
//     let res = await PROTECTED_POST(apiEndpoints().ORDERS.UPDATE_SEEN_STATUS, {
//       ids: data,
//     });
//     return res;
//   }
// );

// // slice
// interface IinitState {
//   ordersShown: Array<Record<any, any>>,
//   activeOrders: Array<Record<any, any>>,
//   oldOrders: {
//     data: Array<Record<any, any>>,
//     fetched: boolean,
//   },
//   status: number,
//   error: any,
//   message: any,
// }

// const initialState: IinitState = {
//   ordersShown: [],
//   activeOrders: [],
//   oldOrders: {
//     data: [],
//     fetched: false,
//   },
//   status: statuses.IDLE,
//   error: null,
//   message: null,
// };

// export const ordersSlice = createSlice({
//   name: "orders",
//   initialState,
//   reducers: {
//     // modify message
//     resetOrdersMessage: (state, action) => {
//       state.message = null;
//     },

//     setOrdersShown: (state, action) => {
//       state.ordersShown = action.payload;
//     },
//   },
//   extraReducers(builder) {
//     builder
//       // get active data
//       .addCase(fetchActiveOrders.pending, (state, action) => {
//         state.status = statuses.LOADING;
//       })
//       .addCase(fetchActiveOrders.fulfilled, (state, action) => {
//         const { success, message, data } = action.payload;
//         if (success) {
//           state.activeOrders = sortOrders(data, orderCategories.ACTIVE);
//           state.ordersShown = sortOrders(data, orderCategories.ACTIVE);
//           state.status = statuses.SUCCEEDED;
//         } else {
//           state.status = statuses.FAILED;
//           state.message = message;
//         }
//       })
//       .addCase(fetchActiveOrders.rejected, (state, action) => {
//         state.status = statuses.FAILED;
//         state.error = action.error.message;
//       })
//       // get old data
//       .addCase(fetchOldOrders.pending, (state, action) => {
//         state.status = statuses.LOADING;
//       })
//       .addCase(fetchOldOrders.fulfilled, (state, action) => {
//         const { success, message, data } = action.payload;
//         if (success) {
//           state.status = statuses.SUCCEEDED;
//           state.oldOrders = {
//             data: sortOrders(data, orderCategories.ACTIVE),
//             fetched: true,
//           };
//           state.ordersShown = sortOrders(data, orderCategories.OLD);
//         } else {
//           state.status = statuses.FAILED;
//           state.message = message;
//         }
//       })
//       .addCase(fetchOldOrders.rejected, (state, action) => {
//         state.status = statuses.FAILED;
//         state.error = action.error.message;
//       })
//       // edit data
//       .addCase(fetchUpdateOrderStatus.pending, (state, action) => {
//         state.status = statuses.LOADING;
//       })
//       .addCase(fetchUpdateOrderStatus.fulfilled, (state, action) => {
//         const { success, message, data } = action.payload;
//         if (success) {
//           state.status = statuses.SUCCEEDED;
//           state.oldOrders.data.push(data);
//           state.activeOrders = state.activeOrders.filter((d: any) => d._id !== data._id);
//           state.message = message;
//         } else {
//           state.status = statuses.FAILED;
//           state.message = message;
//         }
//       })
//       .addCase(fetchUpdateOrderStatus.rejected, (state, action) => {
//         state.status = statuses.FAILED;
//         state.error = action.error.message;
//       })
//       // edit seen status
//       .addCase(fetchUpdateOrderSeenStatus.pending, (state, action) => {
//         state.status = statuses.LOADING;
//       })
//       .addCase(fetchUpdateOrderSeenStatus.fulfilled, (state, action) => {
//         const { success, message } = action.payload;
//         if (success) {
//           state.status = statuses.SUCCEEDED;
//           state.activeOrders = state.activeOrders.map((d: any) => {
//             return {
//               ...d,
//               status: {
//                 seen: true,
//               },
//             };
//           });
//         } else {
//           state.status = statuses.FAILED;
//           state.message = message;
//         }
//       })
//       .addCase(fetchUpdateOrderSeenStatus.rejected, (state, action) => {
//         state.status = statuses.FAILED;
//         state.error = action.error.message;
//       });
//   },
// });

// // export actions
// export const ordersActions = () => {
//   const origin = ordersSlice.actions;
//   return {
//     resetOrdersMessage: origin.resetOrdersMessage,
//     setOrdersShown: origin.setOrdersShown
//   };
// };

// // export data
// export const ordersData = (state: any) => {
//   const origin = state.orders;
//   return {
//     ordersShown: origin.ordersShown,
//     activeOrders: origin.activeOrders,
//     oldOrders: origin.oldOrders,
//     ordersStatus: origin.status,
//     ordersMessage: origin.message,
//   };
// };

// export default ordersSlice.reducer;




/** @format */

// imports
// - general
import { createSlice } from "@reduxjs/toolkit";

// - utils

import { statuses } from "../../constants";

// - config

import { IinitState } from "./ordersSlice.types"

import { stateActions, fetchActions } from "./reducers"
// ---

// utils




// slice


const initialState: IinitState = {
  orders: [],
  oldFetched: false,
  status: statuses.IDLE,
  error: null,
  message: null,
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: stateActions,
  extraReducers(builder) {
    fetchActions(builder)
  }
});

// export actions
export const ordersActions = () => {
  const origin = ordersSlice.actions;
  return {
    resetOrdersMessage: origin.resetOrdersMessage,
  };
};

// export data
export const ordersData = (state: any) => {
  const origin = state.orders;
  return {
    orders: origin.orders,
    oldFetched: origin.oldFetched,
    ordersStatus: origin.status,
    ordersMessage: origin.message,
  };
};

export default ordersSlice.reducer;
