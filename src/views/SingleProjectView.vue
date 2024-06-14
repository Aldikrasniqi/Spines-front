<template>
  <div class="min-h-screen flex items-center w-full justify-center mb-20" v-if="projects.projectLoading">
    <Loading/>
  </div>
  <main v-else class="w-full min-h-screen mx-auto lg:py-14 p-3">
    <h1 class="text-5xl font-semibold mb-10">{{projects.project?.name}}</h1>
    <div class="flex flex-col gap-4 w-full">
      <div >
        <h1 class="text-2xl font-semibold mb-2">{{projects.project?.type}}</h1>
        <span class="text-gray mb-5">
            <FontAwesomeIcon :icon="faUser"/>
            {{ projects.project?.applicationCount }} Applicants
          </span>
        <h2 class="text-xl font-semibold text-dark-blue mt-2 mb-2">
          Information
        </h2>
        <span class="text-gray">
          {{ textFormatter(projects.project?.information) }}
        </span>
      </div>

      <div>
        <h2 class="text-xl font-semibold text-dark-blue mb-2">
          Requirements
        </h2>
        <span class="text-gray text-wrap w-1/3">
          {{ textFormatter(projects.project?.requirements) }}
        </span>
      </div>
      <div>
        <h2 class="text-xl font-semibold text-dark-blue mb-2">
          Skills Required
        </h2>
        <div class="flex gap-1 w-full">
          <button
              class="rounded-full p-2 text-sm text-white bg-blue opacity-100"
              v-for="skill in projects.project?.skills"
              :key="skill.id"
          >
            {{ skill.name ? skill.name : 'No skills' }}
          </button>
        </div>
      </div>
      <div class="flex flex-col">
        <h2 class="text-xl font-semibold text-dark-blue mb-2">Company</h2>


        <ul role="list" class="max-w-sm divide-y divide-gray-200 dark:divide-gray-700">
          <li class="py-3 sm:py-4">
            <div class="flex items-center space-x-3 rtl:space-x-reverse">
              <div class="flex-shrink-0">
                <img class="w-8 h-8 rounded-full" src="https://th.bing.com/th/id/R.d619fda7447c3fb5fc8ad0b23dbf22a7?rik=i9LMN3pDYYerfg&pid=ImgRaw&r=0"  alt="Neil image">
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-semibold text-gray-900 truncate dark:text-white">
                  {{projects.project?.company?.companyName}}
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  {{projects.project?.company?.email}}
                </p>
              </div>
              <span class="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                <span class="w-2 h-2 me-1 bg-green-500 rounded-full"></span>
                {{ projects.project?.company?.organizationType}}
            </span>
            </div>
          </li>
        </ul>
        <div class="w-full max-w-sm">
          <div class="flex items-center">
            <span class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg dark:bg-gray-600 dark:text-white dark:border-gray-600">Website</span>
            <div class="relative w-full">
              <input id="website-url" type="text" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-e-0 border-gray-300 text-gray-500 dark:text-gray-400 text-sm border-s-0 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" :value="projects.project?.company?.webPageUrl" readonly disabled />
            </div>
            <button title="copy" data-tooltip-target="tooltip-website-url" data-copy-to-clipboard-target="website-url" class="flex-shrink-0 z-10 inline-flex items-center py-3 px-4 text-sm font-medium text-center text-black bg-blue-700 rounded-e-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border border-blue-700 dark:border-blue-600 hover:border-blue-800 dark:hover:border-blue-700" type="button">
            <span id="default-icon">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                </svg>
            </span>
              <span id="success-icon" class="hidden inline-flex items-center">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
            </span>
            </button>
            <div id="tooltip-website-url" role="tooltip" class="absolute z-10  inline-block px-3 py-2 text-sm font-medium text-black transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              <span id="default-tooltip-message" class="accent-dark-blue text-black">Copy link</span>
              <span id="success-tooltip-message" class="hidden">Copied!</span>
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
          </div>
          <p id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400">{{ projects.project?.company?.address }}</p>
          <p id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400">{{ projects.project?.company?.phoneNumber }}</p>

        </div>

      </div>
      <div class="self-end mt-6">
        <div class="flex flex-row gap-2">
          <RouterLink
              v-if="currentRoute.name !== 'feed'"  
              :to="{ name: 'feed' }"
              class="bg-light-gray rounded-lg text-dark-gray px-4 py-2 hover:bg-dark-gray hover:text-white"
            >
              Back to Feed
            </RouterLink>
          <button
            class="bg-primary rounded-lg text-white px-4 py-2 hover:bg-dark-blue hover:text-white"
            @click="apply"
            v-if="auth.isUser"
          >
            {{ projects.project?.applied ? 'Applied' : 'Apply'}}
          </button>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useProjectsStore } from '../stores/useProjects';
import { useRouter, useRoute } from 'vue-router';
import {useAuthStore} from "@/stores/useAuth";
import Swal from "sweetalert2";
import Loading from "@/components/Loading.vue";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
const auth = useAuthStore();
const projects = useProjectsStore();
const router = useRouter();
const currentRoute = useRoute();

const id = router.currentRoute.value.params.id as string;

const textFormatter = (text?: string) => {
  if (text) {
    return text.slice(1, text.length - 1);
  }
};
const goBack = () => {
      router.go(-1); // This navigates back one step in history
    };

const apply = async () => {
  if(projects.project?.applied){
    Swal.fire({
      title: 'You have already applied to this project',
      icon: 'info',
      confirmButtonText: 'Ok'
    })
    return;
  }

  const response = await projects.apply()
  if (response?.status === 200) {
    Swal.fire({
      title: 'Application Successful',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  } else {
    Swal.fire({
      title: 'Application Failed',
      icon: 'error',
      confirmButtonText: 'Ok'
    })
  }
};

onMounted(() => {
  projects.fetchProjectsById(id);
  if (!projects.project) {
    router.push({ name: 'feed' });
  }
});


</script>
