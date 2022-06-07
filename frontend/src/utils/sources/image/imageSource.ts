import { IimageSource } from "./imageSource.types";

export const imageSource: IimageSource = (d) => {
    if (d.imgURI || (d.imgId && d.imgId !== "false")) {
        return d.imgURI
            ? d.imgURI
            : process.env.REACT_APP_MODE === "dev"
                // ? "/uploads/" + d.imgId
                // : "/uploads/" + d.imgId;
                ? "/" + d.imgId
                : "/" + d.imgId;
    } else {
        return null;
    }
};
