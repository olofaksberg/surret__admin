import { IuseArrayRef } from "./useArrayRef.types";

export const useArrayRef: IuseArrayRef = () => {
    const refs: any[] = [];
    return [refs, (el) => el && refs.push(el)];
};
