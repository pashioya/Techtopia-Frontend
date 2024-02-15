import { useQuery } from "@tanstack/react-query";
import { getPointOfInterests } from "../services/pointOfInterestAPI";

export function usePointOfInterests() {
    const {
        data: pointOfInterests,
        isLoading: isLoadingPointOfInterests,
        isError: isErrorPointOfInterests,
    } = useQuery({
        queryKey: ["pointOfInterests"],
        queryFn: () => getPointOfInterests(),
        refetchInterval: 30000,
    });

    return {
        isLoading: isLoadingPointOfInterests,
        isError: isErrorPointOfInterests,
        pointOfInterests,
    };
}
