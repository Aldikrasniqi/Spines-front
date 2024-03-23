import { defineStore } from 'pinia';
import type {
  User,
  LoginCredentials,
  RegisterCredentials,
  RegisterCompanyCredentials,
} from '@/interfaces/User';
import { login, registerUser, registerCompany } from '@/services/authService';
import { EMAIL_REGEX, PASSWORD_REGEX, PHONE_REGEX } from '@/constants/regex';
export const useAuthStore = defineStore('auth', {
  state: () => ({
    // init state here
    user: {} as User,
    LoginCredentials: {} as LoginCredentials,
    RegisterCredentials: {} as RegisterCredentials,
    RegisterCompanyCredentials: {} as RegisterCompanyCredentials,
    loggedIn: false,
    loginErrors: {} as any,
    registerUserErrors: {} as any,
    registerCompanyErrors: {} as any,
  }),
  getters: {
    // getters to access state
    // user: (state) => state.user,
    // userName: (state) => state.user?.first_name + ' ' + state.user?.last_name,
    // roles: (state) => state.user && state.user.role ? state.user.role.split(',') : [],
    // loggedIn: (state) => state.loggedIn,
  },
  actions: {
    // methods to update state
    async registerUser(credentials: RegisterCredentials) {
      this.registerUserErrors = {};
      if (!credentials.email) {
        this.registerUserErrors.email = 'Email is required';
        return;
      }
      if (!EMAIL_REGEX.test(credentials.email)) {
        this.registerUserErrors.email = 'Email is invalid';
        return
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
      if (!credentials.email) {
        this.registerCompanyErrors.email = 'Email is required';
      }
      if (!EMAIL_REGEX.test(credentials.email)) {
        this.registerCompanyErrors.email = 'Email is invalid';
      }
      
      if(!credentials.password) {
        this.registerCompanyErrors.password = 'Password is required';
      }
      if(!PASSWORD_REGEX.test(credentials.password!)) {
        this.registerCompanyErrors.password = 'Please enter a valid password with at least 8 characters, 1 uppercase letter, 1 lowercase letter, and 1 number.';
      }
      if(!credentials.password_confirmation) {
        this.registerCompanyErrors.password_confirmation = 'Password confirmation is required';
      }
      if(credentials.password !== credentials.password_confirmation) {
        this.registerCompanyErrors.password_confirmation = 'Passwords do not match';
      }
      if(!credentials.phone) {
        this.registerCompanyErrors.phone = 'Phone is required';
      }
      if(!PHONE_REGEX.test(credentials.phone!)) {
        this.registerCompanyErrors.phone = 'Please enter a valid phone number with 10 digits';
      }

      if(Object.keys(this.registerCompanyErrors).length) {
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
      this.loginErrors = {};
      if (!credentials.email) {
        this.loginErrors.email = 'Email is required';
      }
      if (!EMAIL_REGEX.test(credentials.email)) {
        this.loginErrors.email = 'Email is invalid';
      }

      if (!credentials.password) {
        this.loginErrors.password = 'Password is required';

      }
      if (!PASSWORD_REGEX.test(credentials.password)) {
        this.loginErrors.password =
          'Please enter a valid password with at least 8 characters, 1 uppercase letter, 1 lowercase letter, and 1 number.';
      }
      if (Object.keys(this.loginErrors).length) {
        return;
      }
      this.loginErrors = {};

      try {
        const response = await login(credentials);
        return response;
      } catch (error) {
        console.log(error);
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
    validateConfirmPassword(password: string, confirmPassword: string, type: string) {
      const errors: any = {
        registerUserErrors: this.registerUserErrors,
        registerCompanyErrors: this.registerCompanyErrors,
      };

      if (errors[type]) {
        errors[type].password_confirmation = !confirmPassword ? 'Password confirmation is required' : password !== confirmPassword ? 'Passwords do not match' : null;
      }
    },
    validatePhoneNumber(phone: string, type: string) {
      const errors: any = {
        registerCompanyErrors: this.registerCompanyErrors,
        registerUserErrors: this.registerUserErrors,
      };

      if (errors[type]) {
        errors[type].phone = !phone ? 'Phone is required' : !PHONE_REGEX.test(phone) ? 'Phone is invalid' : null;
      }
    },
  },
});
