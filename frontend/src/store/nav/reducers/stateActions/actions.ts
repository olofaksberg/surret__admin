
import { IinitState } from "../../navSlice.types";

interface Iaction {
    payload: any;
    type: string;
}

export const stateActions = {
    setActive: (state: IinitState, action: Iaction) => {
        state.active = action.payload;
    },
    setNotifications: (state: IinitState, action: Iaction) => {
        const { ordersNoti, productsNoti, marketsNoti } = action.payload;
        state.navLinks = state.navLinks.map((d: any, i: number) => {
            switch (d.text) {
                case "Ordrar":
                    return {
                        ...d,
                        notification: ordersNoti,
                    };
                case "Produkter":
                    return {
                        ...d,
                        notification: productsNoti,
                    };
                case "Marknader":
                    return {
                        ...d,
                        notification: marketsNoti,
                    };
            }
        });
    },
}