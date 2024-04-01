import { defineStore } from 'pinia';
import type {
  User,
  LoginCredentials,
  RegisterCredentials,
  RegisterCompanyCredentials,
} from '@/interfaces/User';
import { login, registerUser, registerCompany,fetchUserData } from '@/services/authService';
import { EMAIL_REGEX, PASSWORD_REGEX, PHONE_REGEX } from '@/constants/regex';
import axiosInstance from '@/plugins/axios';
export const useAuthStore = defineStore('auth', {
  state: () => ({
    // init state here
    loggedIn: localStorage.getItem("token") ? true : false,
    user: {} as User,
    LoginCredentials: {} as LoginCredentials,
    RegisterCredentials: {} as RegisterCredentials,
    RegisterCompanyCredentials: {} as RegisterCompanyCredentials,
    loginErrors: {} as any,
    registerUserErrors: {} as any,
    registerCompanyErrors: {} as any,
  }),
  getters: {
    // getters to access state
    // user: (state) => state.user,
    // userName: (state) => state.user?.first_name + ' ' + state.user?.last_name,
    // roles: (state) => state.user && state.user.role ? state.user.role.split(',') : [],
    isLoggedIn: (state) => state.loggedIn,
  },
  actions: {
    // methods to update state
    async registerUser(credentials: RegisterCredentials) {
      this.registerUserErrors = {};
      if (!credentials.firstName) {
        this.registerUserErrors.name = 'First name is required';
      }
      if(!credentials.lastName){
        this.registerUserErrors.last_name = 'Last name is required';
      }
      if (!credentials.email) {
        this.registerUserErrors.email = 'Email is required';
      }
      if (!EMAIL_REGEX.test(credentials.email)) {
        this.registerUserErrors.email = 'Email is invalid';
      }
      if(!credentials.password){
        this.registerUserErrors.password = 'Password is required';
      } else if(!PASSWORD_REGEX.test(credentials.password!)){
        this.registerUserErrors.password = 'Please enter a valid password with at least 8 characters, 1 uppercase letter, 1 lowercase letter, and 1 number.';
      }
      // if(!credentials.password_confirmation){
      //   this.registerUserErrors.password_confirmation = 'Password confirmation is required';
      // } else if(credentials.password !== credentials.password_confirmation){
      //   this.registerUserErrors.password_confirmation = 'Passwords do not match';
      // }
      
      if(credentials.birthdate){
        const today = new Date();
        const birthdate = new Date(credentials.birthdate);
        const age = today.getFullYear() - birthdate.getFullYear();
        if(age < 18){
          this.registerUserErrors.birthdate = 'You must be at least 18 years old';
        }
      }else {
        this.registerUserErrors.birthdate = 'Birthdate is required';
      }
      if(Object.keys(this.registerUserErrors).length){
        return;
      }
      this.registerUserErrors = {};
      try {
        const response = await registerUser(credentials);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
    async registerCompany(credentials: RegisterCompanyCredentials) {
      this.registerCompanyErrors = {};
      if (!credentials.name) {
        this.registerCompanyErrors.name = 'Name is required';
      }
      if (!credentials.email) {
        this.registerCompanyErrors.email = 'Email is required';
      } else if (!EMAIL_REGEX.test(credentials.email)) {
        this.registerCompanyErrors.email = 'Email is invalid';
      }
      if (!credentials.password) {
        this.registerCompanyErrors.password = 'Password is required';
      } else if (!PASSWORD_REGEX.test(credentials.password!)) {
        this.registerCompanyErrors.password =
          'Please enter a valid password with at least 8 characters, 1 uppercase letter, 1 lowercase letter, and 1 number.';
      }
      if (!credentials.password_confirmation) {
        this.registerCompanyErrors.password_confirmation =
          'Password confirmation is required';
      } else if (credentials.password !== credentials.password_confirmation) {
        this.registerCompanyErrors.password_confirmation =
          'Passwords do not match';
      }
      if (!credentials.phone) {
        this.registerCompanyErrors.phone = 'Phone is required';
      } else if (!PHONE_REGEX.test(credentials.phone!)) {
        this.registerCompanyErrors.phone =
          'Please enter a valid phone number with 10 digits';
      }
      if (!credentials.address) {
        this.registerCompanyErrors.address = 'Address is required';
      }
      if(!credentials.organization_type){
        this.registerCompanyErrors.organization_type = 'Organization type is required';
      }
      if (!credentials.website) {
        this.registerCompanyErrors.website = 'Website is required';
      }
      if (!credentials.skills) {
        this.registerCompanyErrors.skills = 'Skills are required';
      }
      if (Object.keys(this.registerCompanyErrors).length) {
        return;
      }
      this.registerCompanyErrors = {};
      try {
        const response = await registerCompany(credentials);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
    async loginUser(credentials: LoginCredentials) {
      // this.loginErrors = {};
      // if (!credentials.email) {
      //   this.loginErrors.email = 'Email is required';
      // }
      // if (!EMAIL_REGEX.test(credentials.email)) {
      //   this.loginErrors.email = 'Email is invalid';
      // }

      // if (!credentials.password) {
      //   this.loginErrors.password = 'Password is required';
      // }
      // if (!PASSWORD_REGEX.test(credentials.password)) {
      //   this.loginErrors.password =
      //     'Please enter a valid password with at least 8 characters, 1 uppercase letter, 1 lowercase letter, and 1 number.';
      // }
      // if (Object.keys(this.loginErrors).length) {
      //   return;
      // }
      // this.loginErrors = {};
      try {
        const response = await login(credentials);
        console.log(response);
        if(response){
          const token = `Bearer ${response.access_token}`
          localStorage.setItem('token', token);
          axiosInstance.defaults.headers.common['Authorization'] = token;
          this.loggedIn = true;

          // this.user = response.data.user
          // this.user.roles = response.roles ? response.roles : ['user'];
          window.location.href = '/dashboard';
        } 
        return response;
      } catch (error) {
        console.log(error);
        return error;
      }
    },
    async logout() {
      this.user = {} as User;
      window.location.href = '/';
      localStorage.removeItem('token');
    },
    async getUser() {
      const usr = await fetchUserData();
      if (usr) {
        this.loggedIn = true;
        this.user = usr;
      } else {
        this.logout();
      }
    },
    validateEmail(email: string, type: string) {
      const errors: any = {
        registerUserErrors: this.registerUserErrors,
        registerCompanyErrors: this.registerCompanyErrors,
        loginErrors: this.loginErrors,
      };

      if (errors[type]) {
        errors[type].email = !email
          ? 'Email is required'
          : !EMAIL_REGEX.test(email)
          ? 'Email is invalid'
          : null;
      }
    },
    validatePassword(password: string, type: string) {
      const errors: any = {
        registerUserErrors: this.registerUserErrors,
        registerCompanyErrors: this.registerCompanyErrors,
        loginErrors: this.loginErrors,
      };
      if (errors[type]) {
        errors[type].password = !password
          ? 'Password is required'
          : !PASSWORD_REGEX.test(password)
          ? 'Please enter a valid password with at least 8 characters, 1 uppercase letter, 1 lowercase letter, and 1 number.'
          : null;
      }
    },
    validateConfirmPassword(
      password: string,
      confirmPassword: string,
      type: string
    ) {
      const errors: any = {
        registerUserErrors: this.registerUserErrors,
        registerCompanyErrors: this.registerCompanyErrors,
      };

      if (errors[type]) {
        errors[type].password_confirmation = !confirmPassword
          ? 'Password confirmation is required'
          : password !== confirmPassword
          ? 'Passwords do not match'
          : null;
      }
    },
    validatePhoneNumber(phone: string, type: string) {
      const errors: any = {
        registerCompanyErrors: this.registerCompanyErrors,
        registerUserErrors: this.registerUserErrors,
      };
      if (errors[type])
        errors[type].phone = !phone
          ? 'Phone is required'
          : !PHONE_REGEX.test(phone)
          ? 'Phone is invalid'
          : null;
    },
    validateAddress(address: string, type: string) {
      const errors: any = {
        registerCompanyErrors: this.registerCompanyErrors,
      };

      if (errors[type])
        errors[type].address = !address ? 'Address is required' : null;
    },
    validateWebsite(website: string, type: string) {
      const errors: any = {
        registerCompanyErrors: this.registerCompanyErrors,
      };
      if (errors[type])
        errors[type].website = !website ? 'Website is required' : null;
    },
    validateSkills(skills: string, type: string) {
      const errors: any = {
        registerUserErrors: this.registerUserErrors,
        registerCompanyErrors: this.registerCompanyErrors,
      };
      if (errors[type]) errors[type].skills = !skills ? 'Skills are required' : null;
    },
    validateOrganizationType(organization_type: string, type: string) {
      const errors: any = {
        registerCompanyErrors: this.registerCompanyErrors,
      };
      if (errors[type]) errors[type].organization_type = !organization_type ? 'Organization type is required' : null;
    },
    validateName(name: string, type: string)  {
      const errors: any = {
        registerUserErrors: this.registerUserErrors,
        registerCompanyErrors: this.registerCompanyErrors,
      };
      if (errors[type]) errors[type].name = !name ? 'Name is required' : null;
    },
    validateLastName(last_name: string, type: string) {
      const errors: any = {
        registerUserErrors: this.registerUserErrors,
      };
      if (errors[type]) errors[type].last_name = !last_name ? 'Last name is required' : null;
    }
  },
});
