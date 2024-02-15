import { RefreshmentStand } from "../../model/RefreshmentStand";
import { createContext } from "react";

export interface RefreshmentStandContext {
    refreshmentStands: RefreshmentStand[] | undefined;
    isLoading: boolean;
    isError: boolean;
}

export default createContext<RefreshmentStandContext>({
    refreshmentStands: [],
    isLoading: false,
    isError: false,
});
