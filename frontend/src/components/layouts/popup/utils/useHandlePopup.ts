/** @format */

// imports
// - general
import { useDispatch, useSelector } from "react-redux";
// - config
// import { strings } from "../../../../config";
// - store
import { marketsActions } from "../../../../store/markets/marketsSlice";
import { ordersActions } from "../../../../store/orders/ordersSlice";
import { productsActions } from "../../../../store/products/productsSlice";

// ---

export const useHandlePopup = () => {
    const dispatch = useDispatch();

    const { resetMarketsMessage } = useSelector(marketsActions);
    const { resetProductsMessage } = useSelector(productsActions);
    const { resetOrdersMessage } = useSelector(ordersActions);

    const getIconClass = (type: number) => {
        switch (type) {
            case 1:
                return "win fa-check";
            default:
                return "fail fa-circle-xmark";
        }
    };

    const resetPopup = (page: string) => {
        switch (page) {
            case "products":
                dispatch(resetProductsMessage(null));
                break;
            case "markets":
                dispatch(resetMarketsMessage(null));
                break;
            case "orders":
                dispatch(resetOrdersMessage(null));
                break;
            default:
                break;
        }
    };

    return {
        getIconClass,
        resetPopup,
    };
};
