import { useQuery } from "@tanstack/react-query"
import { GetAnimeById, GetAnimeCharacter, GetAnimeRecomendations, GetAnimeTop } from "./reqApi"

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
            queryKey:['recomendationsAnime'],
            queryFn: GetAnimeRecomendations
        },
    )
    return {
        data:data?.data || [],
        isLoading,
        isError
    }
}

export const UseGetAnimeById = (id:string) => {
    const {data, isLoading, isError} = useQuery<any>(
        {
            queryKey:[id],
            queryFn: () => GetAnimeById(id)
        },
    )
    return {
        data:data?.data,
        isLoading,
        isError
    }
}
export const UseGetAnimeCharacter = (id:string) => {
    const {data, isLoading, isError} = useQuery<any>(
        {
            queryKey:[`character-${id}`],
            queryFn: () => GetAnimeCharacter(id)
        },
    )
    return {
        data:data?.data,
        isLoading,
        isError
    }
}