import axios, {type AxiosRequestConfig, type InternalAxiosRequestConfig} from 'axios';
import { API_URL } from '@/constants/api';
import router from '@/router';
import {useAuthStore} from "@/stores/useAuth";

const token = localStorage.getItem('token');
axios.defaults.baseURL = API_URL;
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    ...token && { 'Authorization': `${token}` },
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
})
    
const onRequest = (config: InternalAxiosRequestConfig) => {
  if (!config.headers.Authorization) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  };
  return config;
};  


axiosInstance.interceptors.request.use(onRequest, null);

axiosInstance.interceptors.response.use(
    function (response) {
      return response;
    },
    async function (error) {
      if (!error.response) return;
      switch (error.response.status) {
          case 401:
              await useAuthStore().logout();

              await router.push({
              name: 'login',
              params: {code: 401},
          });
          break;
        case 403:
            await useAuthStore().logout();


            await router.push({
                name: 'login',
                params: {code: 403},
            });
          
          break;
        default:
          console.log(error.response.data);
      }
  
      return Promise.reject(error);
    }  
);

export default axiosInstance;