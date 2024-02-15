import { createContext } from "react";
import { PointOfInterest } from "./../../model/PointOfInterest";

export interface PointOfInterestContext {
    pointOfInterests: PointOfInterest[] | undefined;
    isError: boolean;
    isLoading: boolean;
}

export default createContext<PointOfInterestContext>({
    pointOfInterests: [],
    isError: false,
    isLoading: false,
});
