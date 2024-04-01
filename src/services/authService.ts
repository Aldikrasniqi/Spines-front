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
    const response = (await axios.post(`${API_URL}auth/authenticate`, payload)).data
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
    return error
  }
}

export async function registerCompany(payload: RegisterCompanyCredentials) {
  console.log(payload);
  try {
    const response = await axios.post(
      '/auth/register-company',
      payload
    );
    return response;
  } catch (error: any) {
    console.log(error);
    return error.data.message;
  }
}

export async function fetchUserData() {
  try {
    const token = localStorage.getItem('token');
    if (token) {
      const response = (await axiosInstance.get(`${API_URL}/profile`)).data;
      if (response && response.user) {
        axiosInstance.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${token}`;
        return response.user;
      }
      return null;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}
export async function logout() {
  try {
    const response = (await axiosInstance.post(`${API_URL
    }/logout`)).data;
    return response;
  } catch (error) {
    throw error;
  }
}