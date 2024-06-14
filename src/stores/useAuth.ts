import { defineStore } from 'pinia';
import { jwtDecode } from 'jwt-decode';
import type {
  User,
  LoginCredentials,
  RegisterCredentials,
  RegisterCompanyCredentials,
} from '@/interfaces/User';
import {
  login,
  registerUser,
  registerCompany,
  fetchUserData,
  updateUserProfile,
  updateCompanyProfile, logout
} from '@/services/authService';
import { EMAIL_REGEX, PASSWORD_REGEX, PHONE_REGEX } from '@/constants/regex';
import axiosInstance from '@/plugins/axios';
import type { Company } from '@/interfaces/company';
import router from "@/router";
import {useSkills} from "@/stores/useSkills";
export const useAuthStore = defineStore('auth', {
  state: () => ({
    // init state here
    loggedIn: localStorage.getItem("token") ? true : false,
    user: {} as User,
    company: {} as Company,
    LoginCredentials: {} as LoginCredentials,
    RegisterCredentials: {} as RegisterCredentials,
    RegisterCompanyCredentials: {} as RegisterCompanyCredentials,
    loginErrors: {} as any,
    registerUserErrors: {} as any,
    registerCompanyErrors: {} as any,
    isUser: false,
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
        // if(age < 18){
        //   this.registerUserErrors.birthdate = 'You must be at least 18 years old';
        // }
      }else {
        this.registerUserErrors.birthdate = 'Birthdate is required';
      }
      if(Object.keys(this.registerUserErrors).length){
        return;
      }
      this.registerUserErrors = {};
      try {
        const response = await registerUser(credentials);
        if(response.status === 200){
          const token = `Bearer ${response.data.access_token}`
          localStorage.setItem('token', token);
          axiosInstance.defaults.headers.common['Authorization'] = token;
          this.loggedIn = true;
          this.isUser = true;
          this.decodeToken()

          await router.push({name: 'Dashboard'})
          return response;
        }
        if(response.response.status === 409){
          this.registerUserErrors = {
            email: 'Email is already taken',
          }
          return response;
        }
      } catch (error) {
        console.log(error);
        return error;
      }
    },
    async updateUserProfile() {
      const updatedUser = await updateUserProfile(this.user);

      if(!updatedUser){
        return;
      }

      this.user = updatedUser!;
      await useSkills().fetchSkills()
    },
    async updateCompanyProfile() {
      const updatedCompany = await updateCompanyProfile(this.company);

      if(!updatedCompany){
        return;
      }

      this.company = updatedCompany!;
    },
    async registerCompany(credentials: RegisterCompanyCredentials) {
      this.registerCompanyErrors = {};
      if (!credentials.companyName) {
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
      if (!credentials.passwordConfirmation) {
        this.registerCompanyErrors.password_confirmation =
          'Password confirmation is required';
      } else if (credentials.password !== credentials.passwordConfirmation) {
        this.registerCompanyErrors.password_confirmation =
          'Passwords do not match';
      }
      if (!credentials.phoneNumber) {
        this.registerCompanyErrors.phone = 'Phone is required';
      } else if (!PHONE_REGEX.test(credentials.phoneNumber!)) {
        this.registerCompanyErrors.phone =
          'Please enter a valid phone number with 10 digits';
      }
      if (!credentials.address) {
        this.registerCompanyErrors.address = 'Address is required';
      }
      if(!credentials.organizationType){
        this.registerCompanyErrors.organization_type = 'Organization type is required';
      }
      if (!credentials.webPageUrl) {
        this.registerCompanyErrors.website = 'Website is required';
      }
      if (!credentials.webPageUrl) {
        this.registerCompanyErrors.skills = 'Skills are required';
      }
      if (Object.keys(this.registerCompanyErrors).length) {
        return;
      }
      this.registerCompanyErrors = {};
      try {
        const response = await registerCompany(credentials);
        if(response.status === 200){
          const token = `Bearer ${response.access_token}`
          localStorage.setItem('token', token);
          axiosInstance.defaults.headers.common['Authorization'] = token;
          this.loggedIn = true;
          await  router.push({name: 'feed'})
        }
        
      } catch (error) {
        this.registerCompanyErrors = {
          email: 'Email is already taken',
          password: 'Password is required',
          password_confirmation: 'Password confirmation is required',
          phone: 'Phone is required',
          address: 'Address is required',
          website: 'Website is required',
          skills: 'Skills are required',
        }
        return error;
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
        if(response){
          const token = `Bearer ${response.access_token}`
          axiosInstance.defaults.headers.common['Authorization'] = token;
          localStorage.setItem('token', token);
          this.loggedIn = true;

          this.decodeToken()

          await router.push({path: '/dashboard'})
        } 
        return response;
      } catch (error) {
        console.log(error)
        this.loginErrors = {
          email: 'Email or password is incorrect',
          password: 'Email or password is incorrect',
        }
        return error;
      }
    },
    async logout() {
      this.user = {} as User;
      this.company = {} as Company
      this.isUser = false;
      this.loggedIn = false;
      localStorage.removeItem('token');
      delete axiosInstance.defaults.headers.common['Authorization'];
      await router.push({path: '/login'})
    },
    decodeToken() {
      if (localStorage.getItem('token')) {
        const token = localStorage.getItem('token');
        const decoded: any = jwtDecode(token!);
        this.isUser = decoded.role !== 'COMPANY';
      }
    },
    async getUser() {
      const usr = await fetchUserData(this.isUser);
      if(usr){
        if(this.isUser){
          this.user = usr.data;
        }else{
          this.company = usr.data;
        }
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
    },
    async fetchUser() {
      const user = await fetchUserData(this.isUser);
      if (this.isUser && user) {
        this.user = user.data;
        return
      }

      if (!this.isUser && user) {
        this.company = user.data;
        return
      }
    },

  },
});
