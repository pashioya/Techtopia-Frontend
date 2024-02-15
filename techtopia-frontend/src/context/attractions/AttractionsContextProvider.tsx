import { useAttractions } from "../../hooks/useAttractions";
import AttractionsContext from "./AttractionsContext";
import { ReactElement } from "react";

interface WithChildren {
    children: ReactElement | ReactElement[];
}

export default function AttractionsContextProvider({ children }: WithChildren) {
    const {
        isLoading: attractionsLoading,
        isError: attractionsError,
        attractions,
    } = useAttractions();

    return (
        <AttractionsContext.Provider
            value={{
                isLoading: attractionsLoading,
                isError: attractionsError,
                attractions,
            }}
        >
            {children}
        </AttractionsContext.Provider>
    );
}
