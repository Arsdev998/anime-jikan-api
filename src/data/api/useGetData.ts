import { useQuery } from "@tanstack/react-query"
import { GetAnimeRecomendations, GetAnimeTop } from "./reqApi"

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

export const UseGetRecomendationsAnime = () => {
    const {data, isLoading, isError} = useQuery<any>(
        {
            queryKey:['topAnime'],
            queryFn: GetAnimeRecomendations
        },
    )
    return {
        data:data?.data || [],
        isLoading,
        isError
    }
}