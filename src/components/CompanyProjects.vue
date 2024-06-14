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
                v-model="searchQuery"
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
            <CreateProjectDialog
              v-if="visible"
              :visible="visible"
              @closeModal="emits.closeModal"
            />
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <template v-for="project in displayedProjects" :key="project.id">
            <ProjectsCard
              :skills="project.skills!"
              :requirements="project.requirements"
              :name="project.name"
              :information="project.information"
              :company="auth.company!"
              :to="{ name: 'project', params: { id: project.id! } }"
              :type="project.type"
            />
          </template>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import Button from 'primevue/button';
import { useAuthStore } from '../stores/useAuth';
import { ref, onMounted, computed, watch } from 'vue';
import { useProjectsStore } from '../stores/useProjects';
import { useSkills } from '../stores/useSkills';
import { useCompaniesStore } from '@/stores/useCompanies';
import ProjectsCard from '@/components/ProjectsCard.vue';
import type { Company } from '@/interfaces/company';
import CreateProjectDialog from '@/components/CreateProjectDialog.vue';
const auth = useAuthStore();
const projectsStore = useProjectsStore();
const companyStore = useCompaniesStore();
const skillsStore = useSkills();
const visible = ref(false);
const searchQuery = ref('');

const filterParams = ref({
  startDate: '',
  endDate: '',
  companyName: '',
  skillName: [],
});
console.log(companyStore.projects);
const displayedProjects = computed(() => {
  const searchTerm = searchQuery.value.trim();
  const searchTermLowerCase = searchTerm.toLowerCase();
  const searchTermCapitalized =
    searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1).toLowerCase();

  if (!searchTerm) {
    return companyStore.projects || [];
  } else {
    return (companyStore.projects || []).filter((project) => {
      const companyName = project.name.trim() || '';
      return (
        companyName.toLowerCase().includes(searchTermLowerCase) ||
        companyName.includes(searchTermCapitalized)
      );
    });
  }
});

const emits = {
  closeModal: () => (visible.value = false),
};

onMounted(() => {
  skillsStore.fetchSkills();
  companyStore.fetchProjects();
});

watch(searchQuery, () => {
  companyStore.fetchProjects();
});
</script>
