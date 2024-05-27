<template>
  <div v-if="isUser === 'user'" class="mt-4">
    <form @submit.prevent="submitUserRegistationForm">
      <div class="relative flex items-center">
        <input
          type="first_name"
          id="first_name"
          name="first_name"
          class="border border-light-gray text-gray text-sm rounded-lg focus:ring-blue focus:border-blue block w-full p-3 pl-10 dark:bg-gray dark:border-gray dark:placeholder-gray dark:text-white dark:focus:ring-blue dark:focus:border-blue"
          placeholder="Your First Name"
          autocomplete="on"
          v-model="auth.RegisterCredentials.firstName"
          @keyup="
            auth.validateName(
              auth.RegisterCredentials.firstName!,
              'registerUserErrors'
            )
          "
          @focusout="
            auth.validateName(
              auth.RegisterCredentials.firstName!,
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
        :error="auth.registerUserErrors.name"
        :classProp="'text-field-error mb-5 ml-2 text-sm font-medium mt-1'"
      />
      <div class="relative flex items-center">
        <input
          type="lastName"
          id="lastName"
          name="lastName"
          class="border border-light-gray text-gray text-sm rounded-lg focus:ring-blue focus:border-blue block w-full p-3 pl-10 dark:bg-gray dark:border-gray dark:placeholder-gray dark:text-white dark:focus:ring-blue dark:focus:border-blue"
          placeholder="Last name"
          autocomplete="on"
          v-model="auth.RegisterCredentials.lastName"
          @keyup="
            auth.validateLastName(
              auth.RegisterCredentials.lastName!,
              'registerUserErrors'
            )
          "
          @focusout="
            auth.validateLastName(
              auth.RegisterCredentials.lastName!,
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
        :error="auth.registerUserErrors.last_name"
        :classProp="'text-field-error mb-5 ml-2 text-sm font-medium mt-1'"
      />
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
      <div class="relative flex items-center">
        <input
          type="password"
          id="password"
          name="password"
          class="border border-light-gray text-gray text-sm rounded-lg focus:ring-blue focus:border-blue block w-full p-3 pl-10 dark:bg-gray dark:border-gray dark:placeholder-gray dark:text-white dark:focus:ring-blue dark:focus:border-blue"
          placeholder="Password"
          autocomplete="on"
          v-model="auth.RegisterCredentials.password"
          @keyup="
            auth.validatePassword(
              auth.RegisterCredentials.password!,
              'registerUserErrors'
            )
          "
          @focusout="
            auth.validatePassword(
              auth.RegisterCredentials.password!,
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
        :error="auth.registerUserErrors.password"
        :classProp="'text-field-error mb-5 ml-2 text-sm font-medium mt-1'"
      />
      <!-- <div class="relative flex items-cneter">
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          class="border border-light-gray text-gray text-sm rounded-lg focus:ring-blue focus:border-blue block w-full p-3 pl-10 dark:bg-gray dark:border-gray dark:placeholder-gray dark:text-white dark:focus:ring-blue dark:focus:border-blue"
          placeholder="Confirm Password"
          autocomplete="on"
          v-model="auth.RegisterCredentials.password_confirmation"
          @keyup="
            auth.validateConfirmPassword(
              auth.RegisterCredentials.password!,
              auth.RegisterCredentials.password_confirmation!,
              'registerUserErrors'
            )
          "
          @focusout="
            auth.validateConfirmPassword(
              auth.RegisterCredentials.password!,
              auth.RegisterCredentials.password_confirmation!,
              'registerUserErrors'
            )
          "
        />
        <FontAwesomeIcon
          :icon="faUser"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray"
        />
      </div> -->
      <FieldError
        :error="auth.registerUserErrors.password_confirmation"
        :classProp="'text-field-error mb-5 ml-2 text-sm font-medium mt-1'"
      />
      <div class="flex relative items-center">
        <input 
          type="date"
          id="birthDate"
          name="birthDate"
          class="border border-light-gray text-gray text-sm rounded-lg focus:ring-blue focus:border-blue block w-full p-3 pl-10 dark:bg-gray dark:border-gray dark:placeholder-gray dark:text-white dark:focus:ring-blue dark:focus:border-blue"
          placeholder="Birth Date"
          autocomplete="on"
          v-model="auth.RegisterCredentials.birthdate"
          >
        <FontAwesomeIcon
          :icon="faCalendar"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray"  
        />
        <!-- <vue-tailwind-datepicker :formatter="formatter" v-model="auth.RegisterCredentials.birthdate" /> -->
      </div>
      <FieldError
        :error="auth.registerUserErrors.birthdate"
        :classProp="'text-field-error mb-5 ml-2 text-sm font-medium mt-1'"
      />
      <!-- <div class="relative flex items-center">
        <input 
          type="text"
          id="skills"
          name="skills"
          class="border border-light-gray text-gray text-sm rounded-lg focus:ring-blue focus:border-blue block w-full p-3 pl-10 dark:bg-gray dark:border-gray dark:placeholder-gray dark:text-white dark:focus:ring-blue dark:focus:border-blue"
          placeholder="Skills"
          autocomplete="on"
          v-model="auth.RegisterCredentials.skills"
          @keyup="
            auth.validateSkills(
              auth.RegisterCredentials.skills!,
              'registerUserErrors'
            )
          "
          @focusout="
            auth.validateSkills(
              auth.RegisterCredentials.skills!,
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
        :error="auth.registerUserErrors.skills"
        :classProp="'text-field-error mb-5 ml-2 text-sm font-medium mt-1'"
      /> -->
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
import { faCalendar, faUser } from '@fortawesome/free-solid-svg-icons';
import { useAuthStore } from '@/stores/useAuth';
import FieldError from '@/components/FieldError.vue';
const auth = useAuthStore();
defineProps<{
  isUser: string;
}>();

const submitUserRegistationForm = async () => {
  const response = await auth.registerUser(auth.RegisterCredentials);
  // if (response) {
  //   if(response.response.status === 409) {
  //       auth.registerUserErrors.email = 'Email already exists';
  //   }
  // }
};
</script>
