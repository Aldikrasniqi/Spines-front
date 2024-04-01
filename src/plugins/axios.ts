import axios from 'axios';
import { API_URL } from '@/constants/api';
import router from '@/router';

const token = localStorage.getItem('token');
axios.defaults.baseURL = API_URL;
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    ...token && { 'Authorization': `Bearer ${token}` },
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
})
    
const onRequest = (config: any) => {
  if (!config.headers['Authorization']) {
    config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`
  };
  return config;
};


axiosInstance.interceptors.request.use(onRequest, null);

axiosInstance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (!error.response) return;
      switch (error.response.status) {
        case 403:
          router.push({
              name: 'notfound',
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