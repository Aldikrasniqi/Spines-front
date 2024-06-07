export interface User {
  id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  avatar?: string;
  roles?: string[]
  birthdate?: string;
  token?: string;
  createdAt?: string;
  updatedAt?: string;
  skills?: string[];
}

export interface LoginCredentials {
  email: string;
  password: string;
}
export interface RegisterCredentials {
  firstName?: string;
  lastName?: string;
  email: string;
  birthdate?: Date;
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
