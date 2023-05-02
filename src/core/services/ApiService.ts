import type { AxiosInstance, AxiosRequestConfig } from "axios"
import axios from "axios"
import { _Base_API_URL } from "../../constant"

const axiosConfig = {
    baseURL: _Base_API_URL,
    headers: {
        Authorization: `Bearer null`
    }
}

export interface RequestResponse {
    error?: any;
    res?: any & {
        data: any
    }
}

export const AxiosClient: AxiosInstance = axios.create(axiosConfig)
export class ApiService {
    public static init() {
        axios.defaults.headers.common["Accept"] = "application/json"
        axios.defaults.baseURL = _Base_API_URL as string
    }
    public static async get(resource: string, headers?: any, config?: AxiosRequestConfig): Promise<RequestResponse> {
        const configuration = await this.getAxioConfig(headers, config)
        try {
            const response = await axios.get(`${resource}`, configuration)
            return { res: response.data }
        } catch (error: any) {
            return { error: error.response }
        }
    }

    public static async post(resource: string, params: any, headers?: any, config?: AxiosRequestConfig): Promise<RequestResponse> {
        const configuration = await this.getAxioConfig(headers, config)
        try {
            const response = await axios.post(`${resource}`, params, configuration)
            return { res: response.data }
        } catch (error: any) {
            return { error: error.response }
        }
    }
    public static async update(resource: string, params: any, headers?: any, config?: AxiosRequestConfig): Promise<RequestResponse> {
        const configuration = await this.getAxioConfig(headers, config)
        try {
            const response = await axios.put(`${resource}`, params, configuration)
            return { res: response.data }
        } catch (error: any) {
            return { error: error.response }
        }
    }
    public static async put(resource: string, params: any, headers?: any, config?: AxiosRequestConfig): Promise<RequestResponse> {
        const configuration = await this.getAxioConfig(headers, config)
        try {
            const response = await axios.put(`${resource}`, params, configuration)
            return { res: response.data }
        } catch (error: any) {
            return { error: error.response }
        }
    }
    public static async delete(resource: string, headers?: any): Promise<RequestResponse> {
        const configuration = await this.getAxioConfig(headers)
        try {
            const response = await axios.delete(`${resource}`, configuration)
            return { res: response.data }
        } catch (error: any) {
            return { error: error.response }
        }
    }


    public static async getAxioConfig(header?: any, config?: AxiosRequestConfig): Promise<AxiosRequestConfig> {
        return {
            baseURL: `${_Base_API_URL}`,
            headers: {
                Accept: "application/json",
                ...header
            },
            ...config
        }
    }
}