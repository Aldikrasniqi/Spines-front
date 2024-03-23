<template>
  <div v-if="isUser === 'user'" class="mt-4">
    <form @submit.prevent="submitUserRegistationForm">
      <div class="relative flex items-center mb-5">
        <input
          type="first_name"
          id="first_name"
          name="first_name"
          class="border border-light-gray text-gray text-sm rounded-lg focus:ring-blue focus:border-blue block w-full p-3 pl-10 dark:bg-gray dark:border-gray dark:placeholder-gray dark:text-white dark:focus:ring-blue dark:focus:border-blue"
          placeholder="Your First Name"
          autocomplete="on"
          v-model="auth.RegisterCredentials.first_name"
        />
        <FontAwesomeIcon
          :icon="faUser"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray"
        />
      </div>

      <div class="relative flex items-center">
        <input
          type="email"
          id="email"
          name="email"
          class="border border-light-gray text-gray text-sm rounded-lg focus:ring-blue focus:border-blue block w-full p-3 pl-10 dark:bg-gray dark:border-gray dark:placeholder-gray dark:text-white dark:focus:ring-blue dark:focus:border-blue"
          placeholder="Your Email"
          autocomplete="on"
          v-model="auth.RegisterCredentials.email"
          @keyup="
            auth.validateEmail(
              auth.RegisterCredentials.email,
              'registerUserErrors'
            )
          "
          @focusout="
            auth.validateEmail(
              auth.RegisterCredentials.email,
              'registerUserErrors'
            )
          "
        />
        <FontAwesomeIcon
          :icon="faUser"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray"
        />
      </div>
      <FieldError
        :error="auth.registerUserErrors.email"
        :classProp="'text-field-error mb-5 ml-2 text-sm font-medium mt-1'"
      />
      <button
        type="submit"
        class="text-white w-full bg-ex-light-blue text-center p-2 rounded-lg mb-2 hover:bg-dark-blue"
      >
        Register
      </button>
    </form>
  </div>
</template>
<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useAuthStore } from '@/stores/useAuth';
import FieldError from '@/components/FieldError.vue';

const auth = useAuthStore();
defineProps<{
  isUser: string;
}>();

const submitUserRegistationForm = () => {
  auth.registerUser(auth.RegisterCredentials);
};
</script>
