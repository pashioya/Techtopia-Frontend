import { createContext } from "react";
import { Attraction } from "../../model/Attraction";

export interface AttractionsContext {
    isLoading: boolean;
    isError: boolean;
    attractions: Attraction[] | undefined;
}

export default createContext<AttractionsContext>({
    isLoading: false,
    isError: false,
    attractions: [],
});
