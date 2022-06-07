import { configureStore } from '@reduxjs/toolkit'
import productsReducer from "./products/productsSlice"
import marketsReducer from "./markets/marketsSlice"
import ordersReducer from "./orders/ordersSlice"
import navReducer from "./nav/navSlice"

const store = configureStore({
    reducer: {
        markets: marketsReducer,
        products: productsReducer,
        orders: ordersReducer,
        nav: navReducer,
    },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
