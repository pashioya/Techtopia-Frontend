import { useQuery } from "@tanstack/react-query";
import { getRefreshmentStands } from "../services/refreshmentStandsAPI";


export function useRefreshmentStands(){

    const {
        isLoading: refreshmentStandsLoading,
        isError: refreshmentStandsError,
        data: refreshmentStands,
    } = useQuery({
        queryKey: ['refreshmentStands'],
        queryFn: () => getRefreshmentStands(),
        refetchInterval: 30000,
    })

    return {
        isLoading: refreshmentStandsLoading,
        isError: refreshmentStandsError,
        refreshmentStands,
    }
}