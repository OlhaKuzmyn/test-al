import axios, {AxiosRequestConfig, AxiosResponse} from "axios";

import {baseURL} from "../constants";

const axiosService = axios.create({baseURL});

export type Res<T> = Promise<AxiosResponse<T>>

axiosService.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {
    const token = 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu';
    config.headers!.Authorization = `Bearer ${token}`
    return config
})



export {
    axiosService
}