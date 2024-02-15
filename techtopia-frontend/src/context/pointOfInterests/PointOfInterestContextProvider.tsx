import { ReactElement } from "react";
import PointOfInterestContext from "./PointOfInterestContext";
import { usePointOfInterests } from "../../hooks/usePointOfInterests";

interface WithChildren {
    children: ReactElement | ReactElement[];
}

export default function PointOfInterestContextProvider({
    children,
}: WithChildren) {
    const {
        isLoading: pointOfInterestLoading,
        isError: pointOfInterestError,
        pointOfInterests,
    } = usePointOfInterests();

    return (
        <PointOfInterestContext.Provider
            value={{
                isLoading: pointOfInterestLoading,
                isError: pointOfInterestError,
                pointOfInterests,
            }}
        >
            {children}
        </PointOfInterestContext.Provider>
    );
}
