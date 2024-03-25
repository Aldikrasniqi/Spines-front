<template>
  <div v-if="isCompany === 'company'" class="mt-4">
    <form @submit.prevent="submitCompanyRegistationForm">
      <div class="relative flex items-center">
        <input
          type="name"
          id="name"
          name="name"
          class="border border-light-gray text-gray text-sm rounded-lg focus:ring-blue focus:border-blue block w-full p-3 pl-10 dark:bg-gray dark:border-gray dark:placeholder-gray dark:text-white dark:focus:ring-blue dark:focus:border-blue"
          placeholder="Your Name"
          autocomplete="on"
          v-model="auth.RegisterCompanyCredentials.name"
          @keyup="
            auth.validateName(
              auth.RegisterCompanyCredentials.name!,
              'registerCompanyErrors'
            )
          "
          @focusout="
            auth.validateName(
              auth.RegisterCompanyCredentials.name!,
              'registerCompanyErrors'
            )
          "
        />
        <FontAwesomeIcon
          :icon="faUser"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray"
        />
      </div>
      <FieldError
        :error="auth.registerCompanyErrors.name"
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
          v-model="auth.RegisterCompanyCredentials.email"
          @keyup="
            auth.validateEmail(
              auth.RegisterCompanyCredentials.email,
              'registerCompanyErrors'
            )
          "
          @focusout="
            auth.validateEmail(
              auth.RegisterCompanyCredentials.email,
              'registerCompanyErrors'
            )
          "
        />
        <FontAwesomeIcon
          :icon="faUser"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray"
        />
      </div>
      <FieldError
        :error="auth.registerCompanyErrors.email"
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
          v-model="auth.RegisterCompanyCredentials.password"
          @keyup="
            auth.validatePassword(
              auth.RegisterCompanyCredentials.password!,
              'registerCompanyErrors'
            )
          "
          @focusout="
            auth.validatePassword(
              auth.RegisterCompanyCredentials.password!,
              'registerCompanyErrors'
            )
          "
        />
        <FontAwesomeIcon
          :icon="faLock"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray"
        />
      </div>
      <FieldError
        :error="auth.registerCompanyErrors.password"
        :classProp="'text-field-error mb-5 ml-2 text-sm font-medium mt-1'"
      />
      <div class="relative flex items-center">
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          class="border border-light-gray text-gray text-sm rounded-lg focus:ring-blue focus:border-blue block w-full p-3 pl-10 dark:bg-gray dark:border-gray dark:placeholder-gray dark:text-white dark:focus:ring-blue dark:focus:border-blue"
          placeholder="Confirm Password"
          autocomplete="on"
          v-model="auth.RegisterCompanyCredentials.password_confirmation"
          @keyup="
            auth.validateConfirmPassword(
              auth.RegisterCompanyCredentials.password!,
              auth.RegisterCompanyCredentials.password_confirmation!,
              'registerCompanyErrors'
            )
          "
          @focusout="
            auth.validateConfirmPassword(
              auth.RegisterCompanyCredentials.password!,
              auth.RegisterCompanyCredentials.password_confirmation!,
              'registerCompanyErrors'
            )
          "
        />
        <FontAwesomeIcon
          :icon="faLock"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray"
        />
      </div>
      <FieldError
        :error="auth.registerCompanyErrors.password_confirmation"
        :classProp="'text-field-error mb-5 ml-2 text-sm font-medium mt-1'"
      />
      <div class="relative flex items-center">
        <input
          type="text"
          id="organizationType"
          name="organizationType"
          class="border border-light-gray text-gray text-sm rounded-lg focus:ring-blue focus:border-blue block w-full p-3 pl-10 dark:bg-gray dark:border-gray dark:placeholder-gray dark:text-white dark:focus:ring-blue dark:focus:border-blue"
          placeholder="Organization Type"
          autocomplete="on"
          v-model="auth.RegisterCompanyCredentials.organization_type"
          @keyup="
            auth.validateOrganizationType(
              auth.RegisterCompanyCredentials.organization_type!,
              'registerCompanyErrors'
            )"
          @focusout="
            auth.validateOrganizationType(
              auth.RegisterCompanyCredentials.organization_type!,
              'registerCompanyErrors'
            )"
        />
        <FontAwesomeIcon
          :icon="faUser"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray"
        />
      </div>
      <FieldError
        :error="auth.registerCompanyErrors.organization_type"
        :classProp="'text-field-error mb-5 ml-2 text-sm font-medium mt-1'"
      />
      <div class="relative flex items-center">
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          class="border border-light-gray text-gray text-sm rounded-lg focus:ring-blue focus:border-blue block w-full p-3 pl-10 dark:bg-gray dark:border-gray dark:placeholder-gray dark:text-white dark:focus:ring-blue dark:focus:border-blue"
          placeholder="Phone Number"
          autocomplete="on"
          v-model="auth.RegisterCompanyCredentials.phone"
          @keyup="
            auth.validatePhoneNumber(
              auth.RegisterCompanyCredentials.phone!,
              'registerCompanyErrors'
            )
          "
          @focusout="
            auth.validatePhoneNumber(
              auth.RegisterCompanyCredentials.phone!,
              'registerCompanyErrors'
            )
          "
        />
        <FontAwesomeIcon
          :icon="faPhone"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray"
        />
      </div>
      <FieldError
        :error="auth.registerCompanyErrors.phone"
        :classProp="'text-field-error mb-5 ml-2 text-sm font-medium mt-1'"
      />
      <div class="relative flex items-center">
        <input
          type="text"
          id="address"
          name="address"
          class="border border-light-gray text-gray text-sm rounded-lg focus:ring-blue focus:border-blue block w-full p-3 pl-10 dark:bg-gray dark:border-gray dark:placeholder-gray dark:text-white dark:focus:ring-blue dark:focus:border-blue"
          placeholder="Address"
          autocomplete="on"
          v-model="auth.RegisterCompanyCredentials.address"
          @keyup="
            auth.validateAddress(
              auth.RegisterCompanyCredentials.address!,
              'registerCompanyErrors'
            )
          "
          @focusout="
            auth.validateAddress(
              auth.RegisterCompanyCredentials.address!,
              'registerCompanyErrors'
            )
          "
        />
        <FontAwesomeIcon
          :icon="faLocationDot"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray"
        />
      </div>
      <FieldError
        :error="auth.registerCompanyErrors.address"
        :classProp="'text-field-error mb-5 ml-2 text-sm font-medium mt-1'"
      />
      <div class="flex items-center relative">
        <input
          type="text"
          id="website"
          name="website"
          class="border border-light-gray text-gray text-sm rounded-lg focus:ring-blue focus:border-blue block w-full p-3 pl-10 dark:bg-gray dark:border-gray dark:placeholder-gray dark:text-white dark:focus:ring-blue dark:focus:border-blue"
          placeholder="Website"
          autocomplete="on"
          v-model="auth.RegisterCompanyCredentials.website"
          @keyup="
            auth.validateWebsite(
              auth.RegisterCompanyCredentials.website!,
              'registerCompanyErrors'
            )
          "
          @focusout="
            auth.validateWebsite(
              auth.RegisterCompanyCredentials.website!,
              'registerCompanyErrors'
            )
          "
        />
        <FontAwesomeIcon
          :icon="faGlobe"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray"
        />
      </div>
      <FieldError
        :error="auth.registerCompanyErrors.website"
        :classProp="'text-field-error mb-5 ml-2 text-sm font-medium mt-1'"
      />
      <div class="flex items-center relative">
        <input
          type="text"
          id="skills"
          name="skills"
          class="border border-light-gray text-gray text-sm rounded-lg focus:ring-blue focus:border-blue block w-full p-3 pl-10 dark:bg-gray dark:border-gray dark:placeholder-gray dark:text-white dark:focus:ring-blue dark:focus:border-blue"
          placeholder="Skills"
          autocomplete="on"
          v-model="auth.RegisterCompanyCredentials.skills"
          @keyup="
            auth.validateSkills(
              auth.RegisterCompanyCredentials.skills!,
              'registerCompanyErrors'
            )
          "
          @focusout="
            auth.validateSkills(
              auth.RegisterCompanyCredentials.skills!,
              'registerCompanyErrors'
            )
          "
        />
        <FontAwesomeIcon
          :icon="faBriefcase"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray"
        />
      </div>
      <FieldError
        :error="auth.registerCompanyErrors.skills"
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
import { useAuthStore } from '@/stores/useAuth';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faUser,
  faLock,
  faPhone,
  faLocation,
  faLocationDot,
  faGlobe,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons';
import FieldError from '@/components/FieldError.vue';
defineProps<{
  isCompany: string;
}>();
const auth = useAuthStore();
const submitCompanyRegistationForm = () => {
  auth.registerCompany(auth.RegisterCompanyCredentials);
};
</script>
