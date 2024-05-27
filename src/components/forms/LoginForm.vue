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
        @keyup="auth.validateEmail(auth.LoginCredentials.email, 'loginErrors')"
        @focusout="auth.validateEmail(auth.LoginCredentials.email, 'loginErrors')"
      />
      <FontAwesomeIcon
        :icon="faUser"
        class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray"
      />
    </div>
    <FieldError
      :error="auth.loginErrors.email"
      :classProp="'text-field-error mb-5 ml-2 text-sm font-medium mt-1'"
    />

    <div class="relative flex items-center">
      <input
        type="password"
        id="password"
        name="password"
        class="border border-light-gray text-gray text-sm rounded-lg focus:ring-blue focus:border-blue block w-full p-3 pl-10 dark:bg-gray dark:border-gray dark:placeholder-gray dark:text-white dark:focus:ring-blue dark:focus:border-blue"
        placeholder="Your Password"
        autocomplete="on"
        v-model="auth.LoginCredentials.password"
        @keyup="auth.validatePassword(auth.LoginCredentials.password, 'loginErrors')"
        @focusout="auth.validatePassword(auth.LoginCredentials.password, 'loginErrors')"
      />
      <FontAwesomeIcon
        :icon="faLock"
        class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray"
      />
    </div>

    <FieldError
      :error="auth.loginErrors.password"
      :classProp="'text-field-error mb-5 ml-2 text-sm font-medium mt-1'"
    />

    <button
      type="submit"
      class="text-white w-full bg-ex-light-blue text-center p-2 rounded-lg mb-2 hover:bg-dark-blue"
    >
      Login
    </button>
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
  <div class="flex items-center gap-2 lg:justify-between justify-around mb-4">
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
import FieldError from '@/components/FieldError.vue';
import { onMounted } from 'vue';

const auth = useAuthStore();
const submitLogin = async () => {
  const res = await auth.loginUser(auth.LoginCredentials);
  console.log(res);
  if (res === 200) {
    console.log('Login successful');
  }else if (res === 401) {
    console.log('Invalid credentials');
  } else {
    console.log('An error occurred');
  }

};
onMounted(() => {
  auth.LoginCredentials = {
    email: 'john.doe@example.com',
    password: 'Password123!',
  };
});
</script>
<style scoped></style>
