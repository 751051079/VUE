import axios, { AxiosRequestConfig, Method } from "axios";

const service: any = axios.create({
    baseURL: process.env.BASE_API, // api的base_url
    timeout: 30000 // 请求超时时间
})
console.log(process.env)

service.interceptors.request.use(
    (config:any)=>{
        console.log(config)
    },
    (error:any)=>{

    }
)

export default service