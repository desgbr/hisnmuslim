import axios, { AxiosInstance, AxiosResponse } from "axios";
const axiosRequest: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASEURL,
  maxBodyLength: Infinity,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosRequest.interceptors.response.use(
  (res: AxiosResponse): AxiosResponse => {
    return res.data;
  },
  (error: any): Promise<any> => {
    return Promise.reject(error);
  }
);

export default axiosRequest;
