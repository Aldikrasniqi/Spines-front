import type { LoginCredentials, RegisterCompanyCredentials, RegisterCredentials } from '@/interfaces/User';
import axiosInstance from '@/plugins/axios';
export async function login(payload: LoginCredentials) {
  console.log(payload);
  try {
    const response = await axiosInstance.post('/auth/login', payload);
    return response;
  } catch (error: any) {
    console.log(error);
    return error.data.message;
  }
}

export async function registerUser(payload: RegisterCredentials) {
  console.log(payload);
  try {
    const response = await axiosInstance.post('/auth/register', payload);
    return response;
  } catch (error: any) {
    console.log(error);
    return error.data.message;
  }
}

export async function registerCompany(payload: RegisterCompanyCredentials) {
  console.log(payload)
  try {
    const response = await axiosInstance.post('/auth/register-company', payload);
    return response;
  } catch (error: any) {
    console.log(error);
    return error.data.message;
  }
}