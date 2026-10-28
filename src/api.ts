import axios from "axios"
import type { Horse, IStrapiResponse } from "./types"

export const API_URL = import.meta.env.VITE_API_URL
const API_KEY = import.meta.env.VITE_API_KEY

export const apiInstance = axios.create({
    baseURL: API_URL + "/api",
    headers: {
        Authorization: `Bearer ${API_KEY}`
    },

})

const getHorses = async (): Promise<IStrapiResponse<Horse[]>> => {
    const res = await apiInstance.get<IStrapiResponse<Horse[]>>('/horses', {
        params: {
            populate: '*',
        },
    })
    return res.data
}

export const api = { getHorses }