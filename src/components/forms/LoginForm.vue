<template>
  <h1 class="text-5xl font-sans font-bold mb-10 text-light-black">Log in</h1>
  <form @submit.prevent="submitLogin">
    <div class="relative flex items-center">
      <input
        type="email"
        id="email"
        name="email"
        class="border border-light-gray text-gray text-sm rounded-lg focus:ring-blue focus:border-blue block w-full p-3 pl-10 dark:bg-gray dark:border-gray dark:placeholder-gray dark:text-white dark:focus:ring-blue dark:focus:border-blue"
        placeholder="Your Email"
        autocomplete="on"
        v-model="auth.LoginCredentials.email"
      />
      <FontAwesomeIcon
        :icon="faUser"
        class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray"
      />
    </div>
    <div class="text-field-error mb-5 ml-2 text-sm">
      {{ 
          auth.loginErrors.email ? auth.loginErrors.email : ''
      }}
    </div>

    <div class="relative flex items-center">
      <input
        type="password"
        id="password"
        name="password"
        class="border border-light-gray text-gray text-sm rounded-lg focus:ring-blue focus:border-blue block w-full p-3 pl-10 dark:bg-gray dark:border-gray dark:placeholder-gray dark:text-white dark:focus:ring-blue dark:focus:border-blue"
        placeholder="Your Password"
        autocomplete="on"
        v-model="auth.LoginCredentials.password"
      />
      <FontAwesomeIcon
        :icon="faLock"
        class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray"
      />
    </div>
    <div class="text-field-error mb-5 ml-2 text-sm">
      {{ 
          auth.loginErrors.password ? auth.loginErrors.password : ''
      }}
    </div>
    <div class="w-full bg-ex-light-blue text-center p-2 rounded-lg mb-3">
      <button type="submit" class="text-white w-full">Login</button>
    </div>
  </form>
  <div class="w-full mb-4 text-end pr-2">
    <router-link
      to="/register"
      class="text-ex-light-blue font-sans font-medium text-sm"
      >Forget password?</router-link
    >
  </div>
  <div class="flex items-center">
    <hr class="w-1/2 text-light-gray" />
    <h1 class="p-4 text-gray text-lg font-mediuma">or</h1>
    <hr class="w-1/2 text-light-gray" />
  </div>
  <div class="flex items-center gap-2 justify-between mb-4">
    <facebookbutton />
    <googlebutton />
  </div>
  <div>
    <p class="text-gray">
      Don't have an account?
      <router-link
        to="/register"
        class="text-ex-light-blue font-sans font-medium text-sm"
        >Register</router-link
      >
    </p>    
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import facebookbutton from '@/components/buttons/facebookButton.vue';
import googlebutton from '@/components/buttons/googleButton.vue';
import { useAuthStore } from '@/stores/useAuth';
const auth = useAuthStore();

const submitLogin = async () => {

    auth.login(
        auth.LoginCredentials
    );
    console.log('success login');
};
</script>
<style scoped></style>
