import axiosInstance from "@/lib/config/AxiosInstance"

export const GetAnimeTop = async()=>{
    const response = await axiosInstance.get('/top/anime')
    return response.data
}

export const GetAnimeRecomendations = async()=>{
    const response = await axiosInstance.get('/recommendations/anime')
    return response.data
}

export const GetAnimeSeasonsNow = async()=>{
    const response = await axiosInstance.get('/seasons/now')
    return response.data
}
export const GetAnimeSeasonsWinter = async(year:number)=>{
    const response = await axiosInstance.get(`/seasons/${year}/winter`)
    return response.data
}
export const GetAnimeSeasonsSpring = async(year:number)=>{
    const response = await axiosInstance.get(`/seasons/${year}/spring`)
    return response.data
}

export const GetAnimeById = async(id:string)=>{
    const response = await axiosInstance.get(`/anime/${id}`)
    return response.data
}

export const GetAnimeCharacter = async(id:string)=>{
    const response = await axiosInstance.get(`/anime/${id}/characters`)
    return response.data
}
export const GetAnimeCharacterDetail = async(id:string)=>{
    const response = await axiosInstance.get(`/characters/${id}`)
    return response.data
}