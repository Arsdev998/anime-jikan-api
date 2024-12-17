import axiosInstance from "@/lib/config/AxiosInstance"

export const GetAnimeTop = async()=>{
    const response = await axiosInstance.get('/top/anime')
    return response.data
}

export const GetAnimeRecomendations = async()=>{
    const response = await axiosInstance.get('/recommendations/anime')
    return response.data
}