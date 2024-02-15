import { ReactElement } from "react";
import RefreshmentStandContext from "./RefreshmentStandContext";
import { useRefreshmentStands } from "../../hooks/useRefreshmentStands";

interface WithChildren {
    children: ReactElement | ReactElement[];
}

export default function RefreshmentStandContextProvider({
    children,
}: WithChildren) {
    const {
        isLoading: refreshmentStandsLoading,
        isError: refreshmentStandsError,
        refreshmentStands,
    } = useRefreshmentStands();

    return (
        <RefreshmentStandContext.Provider
            value={{
                isLoading: refreshmentStandsLoading,
                isError: refreshmentStandsError,
                refreshmentStands,
            }}
        >
            {children}
        </RefreshmentStandContext.Provider>
    );
}
