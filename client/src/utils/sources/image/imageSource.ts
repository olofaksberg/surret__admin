import { IimageSource } from "./imageSource.types";

export const imageSource: IimageSource = (d) => {
    if (d.imgURI || (d.imgId && d.imgId !== "false")) {
        return d.imgURI
            ? d.imgURI
            : "/" + d.imgId;
    } else {
        return null;
    }
};
