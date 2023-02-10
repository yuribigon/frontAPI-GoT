import axios, { AxiosError } from "axios";

const apiService = axios.create({
    baseURL: "https://ThronesApi.com"
});

export const doGet = async(url:string)=>{
    try {
        const response = await apiService.get(url);
        return response.data
    } catch (error) {
        if (error instanceof AxiosError){
            return error.response?.data
        }
        
    }
}
