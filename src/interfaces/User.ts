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
  skills?: Skills[];
  profilePicture?: string;
}

export interface Skills {
    id?: string;
    name?: string;
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
  companyName?: string;
  email: string;
  address?: string;
  phoneNumber?: string;
  organizationType?: string;
  webPageUrl?: string;
  password?: string;
  passwordConfirmation?: string;
}
