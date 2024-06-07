<template>
  <!-- @vue-ignore -->
  <main class="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4" v-if="$auth.isUser">
    <div class="p-2 md:p-4">
      <div class="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
        <h2 class="pl-6 text-2xl font-bold sm:text-xl">Public Profile</h2>
        <div class="grid max-w-2xl mx-auto mt-8">
          <div
            class="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0"
          >
            <img
              class="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
              src="../assets/images/anash copy.jpg"
              alt="Bordered avatar"
            />

            <div class="flex flex-col space-y-5 sm:ml-8">
              <button
                type="button"
                class="py-3.5 px-7 text-base font-medium text-white focus:outline-none bg-primary rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200"
              >
                Change picture
              </button>
              <button
                type="button"
                class="py-3.5 px-7 text-base font-medium text-indigo-900 focus:outline-none bg-white rounded-lg border border-indigo-200 hover:bg-indigo-100 hover:text-[#202142] focus:z-10 focus:ring-4 focus:ring-indigo-200"
              >
                Delete picture
              </button>
            </div>
          </div>

          <div class="items-center mt-8 sm:mt-14 text-[#202142]">
            <div
              class="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6"
            >
              <div class="w-full">
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                  >Your first name</label
                >
                <input
                  type="text"
                  id="first_name"
                  class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                  placeholder="Your first name"
                  :value="auth.user.firstName"
                  required
                />
              </div>

              <div class="w-full">
                <label
                  for="last_name"
                  class="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                  >Your last name</label
                >
                <input
                  type="text"
                  id="last_name"
                  class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                  placeholder="Your last name"
                  :value="auth.user.lastName"
                  required
                />
              </div>
            </div>

            <div class="mb-2 sm:mb-6">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                >Your email</label
              >
              <input
                type="email"
                id="email"
                class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                placeholder="your.email@mail.com"
                required
                :value="auth.user.email"
              />
            </div>

            <div class="mb-2 sm:mb-6">
              <label
                for="birthdate"
                class="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                >Birthdate</label
              >
              <input
                type="text"
                id="birthdate"
                class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                placeholder="your birthdate"
                required
                :value="auth.user.birthdate"
              />
            </div>

            <div class="mb-6">
                <label
                  for="message"
                  class="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                  >Skills</label
                >
                <span v-if="auth.user.skills">
                  <span v-for="skill in auth.user.skills" :key="skill" class="inline-block px-2 py-1 text-sm font-medium text-white bg-indigo-500 rounded-full mr-2">{{ skill }}</span>
                </span>
                <span>
                  <input
                    type="text"
                    id="skills"
                    class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                    placeholder="Your skills"
                    required
                    value="No skills added yet"
                  />
                </span>
              </div>

            <div class="flex justify-end">
              <button
                type="submit"
                class="text-white bg-primary hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <main class="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4" v-else="$auth.isUser">
    <div class="p-2 md:p-4">
      <div class="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
        <h2 class="pl-6 text-2xl font-bold sm:text-xl">Public Company Profile</h2>
        <div class="grid max-w-2xl mx-auto mt-8">
          <div class="items-center mt-8 sm:mt-4 text-[#202142]">
            <div
              class="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6"
            >
              <div class="w-full">
                <label
                  for="companyName"
                  class="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                  >Company Name</label
                >
                <input
                  type="text"
                  id="companyName"
                  class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                  placeholder="Your company name"
                  :value="auth.company.companyName"
                  required
                />
              </div>

              <div class="w-full">
                <label
                  for="address"
                  class="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                  >Company address</label
                >
                <input
                  type="text"
                  id="address"
                  class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                  placeholder="Your address"
                  :value="auth.company.address"
                  required
                />
              </div>
            </div>

            <div class="mb-2 sm:mb-6">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                >Your email</label
              >
              <input
                type="email"
                id="email"
                class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                placeholder="your.email@mail.com"
                required
                :value="auth.company.email"
              />
            </div>

            <div class="mb-2 sm:mb-6">
              <label
                for="helpOrg"
                class="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                >Help description</label
              >
              <input
                type="text"
                id="helpOrg"
                class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                placeholder="your organization"
                required
                :value="auth.company.helpDescription"
              />
            </div>

            <div class="mb-6">
                <label
                  for="orgType"
                  class="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                  >
                  Organistion type</label
                >
                <input 
                  type="text"
                  id="orgType"
                  class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                  placeholder="Oranisation type"
                  required
                  :value="auth.company.organizationType"
                />
              </div>
              <div class="mb-6">
                <label
                  for="phone"
                  class="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                  >
                  Phone Number</label
                >
                <input 
                  type="text"
                  id="phone"
                  class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                  placeholder="Your phone number"
                  required
                  :value="auth.company.phoneNumber"
                />
              </div>
              <div class="mb-6">
                <label
                  for="website"
                  class="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                  >
                  Website</label
                >
                <input 
                  type="text"
                  id="website"
                  class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                  placeholder="Your website"
                  required
                  :value="auth.company.webPageUrl"
                />
              </div>

            <div class="flex justify-end">
              <button 
                class="me-2 text-white bg-field-error hover:bg-field-error focus:ring-4 focus:outline-none focus:ring-field-error font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-field-error dark:hover:bg-red-700 dark:focus:ring-red-800">
                Cancel
              </button>
              <button
                type="submit"
                class="text-white bg-primary hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import Calendar from 'primevue/calendar';
import { useAuthStore } from '../stores/useAuth';
const auth = useAuthStore();
// interface decodedProps {
//   exp: number;
//   iat: number;
//   sub: string;
//   role: string;
// }
console.log(auth.user)
</script>
