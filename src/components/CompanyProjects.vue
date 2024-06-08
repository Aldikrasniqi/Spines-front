<template>
  <main class="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
    <div>
      <div class="w-full px-6 pb-8 mt-8 sm:rounded-lg">
        <h2 class="pl-6 text-2xl font-bold sm:text-4xl">Projects feed</h2>
        <div>
          <div class="p-6 flex items-center w-full justify-between gap-2">
            <div class="relative w-full">
              <div
                class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
              >
                <svg
                  class="w-4 h-4 text-gray"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-3 ps-10 text-sm text-gray border border-gray rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue dark:bg-gray dark:border-gray dark:focus:ring-primary dark:focus:border-primary"
                placeholder="Search Mockups, Logos..."
                required
              />
            </div>
            <!-- @vue-ignore -->
            <button
              v-if="!$auth.isUser"
              class="bg-primary rounded-xl text-white w-1/4 p-3"
              @click="visible = true"
            >
              Create Project
            </button>
            <Dialog v-model:visible="visible" modal header="Create Project" :style="{ width: '25rem' }">
              <!-- <div class="flex items-center gap-3 mb-3">
                  <label for="name" class="font-semibold w-[6rem]">Name</label>
                  <input id="name" class="flex-auto p-1.5 rounded-lg border" autocomplete="off" placeholder="Name" v-model="projectsStore.projectCredentials.name" />
              </div>
              <div class="flex items-center gap-3 mb-5">
                  <label for="Type" class="font-semibold w-[6rem]">Type</label>
                  <input id="Type" class="flex-auto p-1.5 rounded-lg border" autocomplete="off" placeholder="Project type" v-model="projectsStore.projectCredentials.type" />
              </div>
              <div class="flex items-center gap-3 mb-5">
                  <label for="Requirements" class="font-semibold w-[6rem]">Requirements</label>
                  <input id="Requirements" class="flex-auto p-1.5 rounded-lg border" autocomplete="off" placeholder="Requirements" v-model="projectsStore.projectCredentials.requirements" />
              </div>
              <div class="flex items-center gap-3 mb-5">
                  <label for="information" class="font-semibold w-[6rem]">Information</label>
                  <input id="information" class="flex-auto p-1.5 rounded-lg border" autocomplete="off" placeholder="Informations" v-model="projectsStore.projectCredentials.informations" />
              </div>
              <div class="flex items-center gap-3 mb-5">
                  <label for="Type" class="font-semibold w-[6rem]">Skills Id</label>
                  <input id="Type" class="flex-auto p-1.5 rounded-lg border" autocomplete="off" placeholder="Project type" v-model="projectsStore.projectCredentials.skillsId" />
              </div>
              <div class="flex justify-end gap-2">
                  <Button type="button" label="Cancel" severity="secondary" @click="visible = false" class="bg-field-error"></Button>
                  <Button type="button" label="Save" @click="projectsStore.createProject" class="text-white"></Button>
              </div> -->
              <form @submit.prevent action="#">
        <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div class="w-full">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Name</label>
            <input type="text" v-model="projectsStore.projectCredentials.name" name="name"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Project name">
          </div>
          <div class="w-full">
            <label for="type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Type</label>
            <input type="text" name="type" v-model="projectsStore.projectCredentials.type" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Project type">
          </div>
          <div class="sm:col-span-2">
            <label for="information" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Information</label>
            <input type="text" name="information" v-model="projectsStore.projectCredentials.information"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Project information">
          </div>
          <div class="sm:col-span-2">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Skills</label>
            <div class="mt-1 text-sm text-gray-500 dark:text-gray-300" >Skills needed to apply to this project.</div>
            <ul class="flex flex-row flex-wrap overflow-hidden items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <li v-for="skill of skillsStore.getSkills" :key="skill.id" class="lg:w-1/2 w-full  dark:border-gray-600">
                <div class="flex items-center ps-3 w-full">
                  <input :id="skill.id" :value="skill.id" v-model="projectsStore.projectCredentials.skillsIds" type="checkbox"  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                  <label :for="skill.id" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ skill.name }}</label>
                </div>
              </li>
            </ul>
          </div>
          <div class="sm:col-span-2">
            <label for="requirements" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Requirements</label>
            <textarea v-model="projectsStore.projectCredentials.requirements"  rows="8" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
          </div>
        </div>
        <div class="flex justify-end gap-2 mt-2">
          <Button type="button" label="Cancel" severity="secondary" @click="visible = false" class="bg-field-error"></Button>
          <Button type="button" label="Save" @click="projectsStore.createProjects()" class="text-white"></Button>
        </div>
      </form>
          </Dialog>
            <div class="card flex justify-center">
              <button
                type="button"
                icon="pi pi-ellipsis-v"
                @click="toggle"
                aria-haspopup="true"
                aria-controls="overlay_menu"
                class="bg-primary rounded-xl text-white p-3"
              >
                Filter
              </button>
              <Menu
                ref="menu"
                id="overlay_menu"
                :model="items"
                :popup="true"
                class=""
              />
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <!-- @vue-ignore -->
          <template
              v-for="project in companyStore.projects"
              :key="project.id"
          >          <ProjectsCard :skills="project.skills!" :requirements="project.requirements" :name="project.name" :information="project.information"  :company="auth.company as Company"  :to="{ name: 'project', params: { id: project.id! } }" :type="project.type"></ProjectsCard>
          </template>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import Button from 'primevue/button';
import { useAuthStore } from '../stores/useAuth';

import { ref, onMounted } from 'vue';
import Menu from 'primevue/menu';
import Dialog from 'primevue/dialog';
import { useProjectsStore } from '../stores/useProjects';
import { useSkills } from '../stores/useSkills';
import {useCompaniesStore} from "@/stores/useCompanies";
import ProjectsCard from "@/components/ProjectsCard.vue";
import type {Company} from "@/interfaces/company";

const auth = useAuthStore();
const projectsStore = useProjectsStore();
const companyStore = useCompaniesStore();
const skillsStore = useSkills();
const visible = ref(false);

const menu = ref();
const items = ref([
  {
    label: 'Options',
    items: [
      {
        label: 'Refresh',
        icon: 'pi pi-refresh',
      },
      {
        label: 'Export',
        icon: 'pi pi-upload',
      },
    ],
  },
]);

const toggle = (event: any) => {
  menu.value.toggle(event);
};
onMounted(() => {
  skillsStore.fetchSkills();
  companyStore.fetchProjects();
});
</script>
