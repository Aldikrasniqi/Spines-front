export interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
  role: string;
  token: string;
  createdAt: string;
  updatedAt: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}
export interface RegisterCredentials {
  first_name?: string;
  last_name?: string;
  email: string;
  birthdate?: string;
  password?: string;
  password_confirmation?: string;
  skills?: string;
}
export interface RegisterCompanyCredentials{
  name?: string;
  email: string;
  address?: string;
  phone?: string;
  organization_type?: string;
  website?: string;
  password?: string;
  password_confirmation?: string;
  skills?: string;
}
