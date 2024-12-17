import axios from 'axios'
const baseUrl = process.env.NEXT_PUBLIC_API;

export const axiosInstance = axios.create({
    baseURL: baseUrl
})

export default axiosInstance;