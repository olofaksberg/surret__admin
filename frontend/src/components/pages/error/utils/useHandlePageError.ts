// imports
// - constants
import { statuses } from "../../../../constants";
// ---

export const useHandlePageError = () => {
    const getContent = (status: number) => {
        switch (status) {
            case statuses.NOTFOUND:
                return "Ingen sida hittades :(";

            case statuses.LOADING:
                return "Laddar ..";

            case statuses.FAILED:
                return "Något gick snett :(";

            default:
                return;
        }
    };

    return {
        getContent,
    };
};
