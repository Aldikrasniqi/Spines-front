import type {
  LoginCredentials,
  RegisterCompanyCredentials,
  RegisterCredentials,
} from '@/interfaces/User';
import axiosInstance from '@/plugins/axios';
import axios from 'axios';
import { API_URL } from '@/constants/api';


export async function login(payload: LoginCredentials) {
  try {
    const response = (await axios.post(`${API_URL}auth/authenticate`, payload))
      .data;
    return response;
  } catch (error: any) {
    console.log(error);
    return error.data.message;
  }
}

export async function registerUser(payload: RegisterCredentials) {
  try {
    const response = await axios.post('auth/signup/user', payload);
    return response;
  } catch (error: any) {
    console.log(error);
    return error;
  }
}

export async function registerCompany(payload: RegisterCompanyCredentials) {
  console.log(payload);
  try {
    const response = await axios.post('/auth/register-company', payload);
    return response;
  } catch (error: any) {
    console.log(error);
    return error.data.message;
  }
}

export async function fetchUserData(isUser: boolean) {
  try {
    if (isUser) {
      const response = await axiosInstance.get(`${API_URL}volunteers/me`);
      return response;
    }else{
      const response = await axiosInstance.get(`${API_URL}companies/me`); 
      return response;
    }
  } catch (error) {
    return null;
  }
}
export async function logout() {
  try {
    const response = (await axiosInstance.post(`${API_URL}/logout`)).data;
    return response;
  } catch (error) {
    throw error;
  }
}
export async function fetchUserById(id: string) {
  try {
    const response = (await axiosInstance.get(`${API_URL}/user/${id}`)).data;
    return response;
  } catch (error) {
    return null;
  }
}
