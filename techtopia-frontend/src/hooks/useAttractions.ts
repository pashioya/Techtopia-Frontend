import { useQuery } from '@tanstack/react-query';
import { getAttractions } from '../services/attractionsAPI';


export function useAttractions(){

    const {
        isLoading: attractionsLoading,
        isError: attractionsError,
        data: attractions,
    } = useQuery({
        queryKey: ['attractions'],
        queryFn: () => getAttractions(),
        refetchInterval: 30000,
    })

    return {
        isLoading: attractionsLoading,
        isError: attractionsError,
        attractions,
    }
}