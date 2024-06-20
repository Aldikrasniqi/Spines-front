import type {
  LoginCredentials,
  RegisterCompanyCredentials,
  RegisterCredentials,
  User,
} from '@/interfaces/User';
import axiosInstance from '@/plugins/axios';
import axios from 'axios';
import { API_URL } from '@/constants/api';
import type { Company } from '@/interfaces/company';
import Swal from 'sweetalert2';

export async function login(payload: LoginCredentials) {
  try {
    const response = (await axios.post(`${API_URL}auth/authenticate`, payload))
      .data;
    return response;
  } catch (error: any) {
    throw error;
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
  try {
    const response = await axios.post('auth/signup/company', payload);
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
    } else {
      const response = await axiosInstance.get(`${API_URL}companies/me`);
      return response;
    }
  } catch (error) {
    return null;
  }
}
export async function logout() {
  try {
    const response = (await axiosInstance.post(`${API_URL}logout`)).data;
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

export async function updateUserProfile(payload: User) {
  try {
    const response = await axiosInstance.put<User>(
      `${API_URL}volunteers/me`,
      payload
    );

    Swal.fire({
      icon: 'success',
      text: 'Updated profile successfully!',
    });

    return response.data;
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Failed to update user!',
    });

    return null;
  }
}

export async function updateCompanyProfile(payload: Company) {
  try {
    const response = await axiosInstance.put<Company>(
      `${API_URL}companies/me`,
      payload
    );

    Swal.fire({
      icon: 'success',
      text: 'Updated profile successfully!',
    });

    return response.data;
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Failed to update user!',
    });
  }
}

export async function updateProfilePicture(payload: FormData) {
  try {
    const response = await axiosInstance.post(
      `${API_URL}volunteers/me/profile-picture`,
      payload,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return response.data;
  } catch (error) {
    return null;
  }
}
