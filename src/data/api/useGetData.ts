import { useQuery } from "@tanstack/react-query"
import { GetAnimeTop } from "./reqApi"

export const UseGetTopAnime = () => {
    const {data, isLoading, isError} = useQuery<any>(
        {
            queryKey:['topAnime'],
            queryFn: GetAnimeTop
        },
    )
    return {
        data:data?.data || [],
        isLoading,
        isError
    }
}