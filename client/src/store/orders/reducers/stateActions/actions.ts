import { IinitState } from "../../ordersSlice.types";

interface Iaction {
    payload: any;
    type: string;
}

export const stateActions = {
    resetOrdersMessage: (state: IinitState, action: Iaction) => {
        state.message = null;
    },
}