import { defineStore } from 'pinia';
import type { User, LoginCredentials } from '@/interfaces/User';
import { login } from '@/services/authService';
import { EMAIL_REGEX, PASSWORD_REGEX } from '@/constants/regex';
export const useAuthStore = defineStore('auth', {
  state: () => ({
    // init state here
    user: {} as User,
    LoginCredentials: {} as LoginCredentials,
    loggedIn: false,
    loginErrors: {} as any,
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
    async login(credentials: LoginCredentials) {
      this.loginErrors = {};
      if (!credentials.email) {
        this.loginErrors.email = 'Email is required';
        return;
      }
      if (!EMAIL_REGEX.test(credentials.email)) {
        this.loginErrors.email = 'Email is invalid';
        return
      }

      if (!credentials.password) {
        this.loginErrors.password = 'Password is required';
        return;
      }
      if(!PASSWORD_REGEX.test(credentials.password)) {
        this.loginErrors.password = 'Please enter a valid password with at least 8 characters, 1 uppercase letter, 1 lowercase letter, and 1 number.';
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
  },
});
