import type { LoginCredentials, RegisterCompanyCredentials, RegisterCredentials } from '@/interfaces/User';
import axiosInstance from '@/plugins/axios';
export async function login(payload: LoginCredentials) {
  console.log(payload);
  if(payload.email === 'aldikrasniqi5@gmail.com'){
    return {
      roles: ['user'],
      data: {
        token: 'eyJhbGcioiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VyX2VtYWlsIjoiYWxkaWtyYXNuaWtpNUBnbWFpbC5jb20iLCJ1c2VyX25hbWUiOiJBbGQgS3Jhc25pa2kifQ.7',
        user: {
          token: 'eyJhbGcioiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VyX2VtYWlsIjoiYWxkaWtyYXNuaWtpNUBnbWFpbC5jb20iLCJ1c2VyX25hbWUiOiJBbGQgS3Jhc25pa2kifQ.7',
          id: '1',
          email: 'aldikrasniqi5@gmail.com',
          first_name: 'Aldi',
          last_name: 'Krasniqi',
          roles: ['user'],
          birthdate: '1998-11-05',
          avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
          createdAt: '2021-11-05',
          updatedAt: '2021-11-05',
        },
      },
    }
  }
  // try {
  //   const response = await axiosInstance.post('/auth/login', payload);
  //   return response;
  // } catch (error: any) {
  //   console.log(error);
  //   return error.data.message;
  // }
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