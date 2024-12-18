import { useQuery } from "@tanstack/react-query"
import { GetAnimeById, GetAnimeCharacter, GetAnimeCharacterDetail, GetAnimeRecomendations, GetAnimeSeasonsNow, GetAnimeSeasonsSpring, GetAnimeSeasonsWinter, GetAnimeTop } from "./reqApi"

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

export const UseGetAnimeSeasonsNow = () => {
    const {data, isLoading, isError} = useQuery<any>(
        {
            queryKey:['animeSeasonsNow'],
            queryFn: GetAnimeSeasonsNow
        },
    )
    return {
        data:data?.data || [],
        isLoading,
        isError
    }
}

export const UseGetAnimeSeasonsWinter = (year:number) => {
    const {data, isLoading, isError} = useQuery<any>(
        {
            queryKey:['animeSeasonsWinter'],
            queryFn: () => GetAnimeSeasonsWinter(year)
        },
    )
    return {
        data:data?.data || [],
        isLoading,
        isError
    }
}
export const UseGetAnimeSeasonsSpring = (year:number) => {
    const {data, isLoading, isError} = useQuery<any>(
        {
            queryKey:['animeSeasonsSpring'],
            queryFn: () => GetAnimeSeasonsSpring(year)
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
            queryFn: () => GetAnimeById(id),
            enabled: !!id
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
            queryFn: () => GetAnimeCharacter(id),
            enabled: !!id
        },
    )
    return {
        data:data?.data,
        isLoading,
        isError
    }
}

export const UseGetAnimeCharacterDetail = (id:string) => {
    const {data, isLoading, isError} = useQuery<any>(
        {
            queryKey:[`character-detail-${id}`],
            queryFn: () => GetAnimeCharacterDetail(id),
            enabled: !!id
        },
    )
    return {
        data:data?.data,
        isLoading,
        isError
    }
}