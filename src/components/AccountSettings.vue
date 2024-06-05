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

            <button
              v-if="!$auth.isUser"
              class="bg-primary rounded-xl text-white w-1/4 p-3"
              @click="visible = true"
            >
              Create Project
            </button>
            <Dialog v-model:visible="visible" modal header="Create Project" :style="{ width: '25rem' }">
              <div class="flex items-center gap-3 mb-3">
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
              </div>
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
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import Button from 'primevue/button';
import { useAuthStore } from '../stores/useAuth';
const auth = useAuthStore();
const projectsStore = useProjectsStore();
import { ref } from 'vue';
import Menu from 'primevue/menu';
import Dialog from 'primevue/dialog';
import { useProjectsStore } from '../stores/useProjects';
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

const toggle = (event) => {
  menu.value.toggle(event);
};
</script>
