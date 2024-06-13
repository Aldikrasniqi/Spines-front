<template>
  <main class="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4 mx-auto">
    <div>
      <div class="w-full pb-8 mt-8 sm:rounded-lg">
        <h2 class="text-2xl font-bold sm:text-4xl">Projects feed</h2>
        <div>
          <div class="py-6 flex items-center w-full justify-between gap-2">
            <div class="relative w-full">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500"
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
                class="block w-full p-3 pl-10 text-sm text-gray-800 border border-light-gray rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-700 dark:focus:ring-primary dark:focus:border-primary"
                placeholder="Search by project name or company name"
                required
                v-model="searchQuery"
                @input="handleSearch"
              />
            </div>

            <CreateProjectDialog
              v-if="visible"
              :visible="visible"
              @closeModal="emits.closeModal"
            />

            <input
              type="date"
              v-model="filterParams.startDate"
              @change="handleFilter"
              class="w-1/3 block p-2.5 text-gray-800 border border-light-gray rounded-lg bg-white"
              placeholder="Start Date"
            />

            <input
              type="date"
              v-model="filterParams.endDate"
              @change="handleFilter"
              class="w-1/3 p-2.5 block text-gray-800 border border-light-gray rounded-lg bg-white"
              placeholder="End Date"
            />

            <button
              v-if="auth.isUser"
              class="bg-primary rounded-xl text-white w-1/4 p-3"
              @click="visible = true"
            >
              Create Project
            </button>
          </div>
        </div>
      </div>

      <div v-if="!displayedProjects.length" class="text-center text-gray-500 py-8">
        No Projects Found
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" v-else>
        <ProjectsCard
          v-for="project in displayedProjects"
          :key="project.id"
          :name="project.name"
          :type="project.type"
          :requirements="project.requirements"
          :information="project.information"
          :skills="project.skills!"
          :company="project.company!"
          :to="{ name: 'project', params: { id: project.id! } }"
        />
      </div>
    </div>

    <div class="flex w-full mx-auto justify-center p-4 items-center gap-3">
      <button
        @click="handlePageChange(currentPage - 1)"
        :disabled="isPreviousDisabled"
        class="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-800 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50"
      >
        Previous
      </button>
      <span class="text-sm font-medium text-gray-800 dark:text-gray-400">
        Page {{ currentPage + 1 }} of {{ projects.projects.totalPages }}
      </span>
      <button
        @click="handlePageChange(currentPage + 1)"
        :disabled="isNextDisabled"
        class="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-800 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50"
      >
        Next
      </button>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { useAuthStore } from '../stores/useAuth';
import CreateProjectDialog from '@/components/CreateProjectDialog.vue';
import ProjectsCard from '@/components/ProjectsCard.vue';
import { useProjectsStore } from '@/stores/useProjects';

const currentPage = ref(0);
const searchQuery = ref('');
const filterParams = ref({
  startDate: '',
  endDate: '',
  companyName: '',
  skillName: [],
});
const auth = useAuthStore();
const projects = useProjectsStore();
const visible = ref(false);
const emits = {
  closeModal: () => (visible.value = false),
};

const displayedProjects = computed(() => {
  if (!searchQuery.value.trim()) {
    return projects.projects.content || [];
  } else {
    const searchTerm = searchQuery.value.trim().toLowerCase();
    return (projects.projects.content || []).filter(project => {
      const company = project.company?.toString().toLowerCase();
      return project.name.toLowerCase().includes(searchTerm) ||
             (company && company.includes(searchTerm));
    });
  }
});

const isPreviousDisabled = computed(() => currentPage.value <= 0);
const isNextDisabled = computed(
  () =>
    projects.projects.totalPages === undefined ||
    currentPage.value >= projects.projects.totalPages - 1
);

const handlePageChange = (page: number) => {
  // if (page < 0 || page >= projects.projects.totalPages) {
  //   console.log('here')
  //   return;
  // }
  currentPage.value = page;
  const res = fetchProjects();
  return res;
};

const handleSearch = () => {
  if (searchQuery.value.trim() === '') {
    console.log('searchQuery.value', searchQuery.value);
    searchQuery.value = ''; 
    handlePageChange(0);
  } else {
    handlePageChange(0);
  }
};

const handleFilter = () => {
  handlePageChange(0);
};

const fetchProjects = () => {
  projects.fetchProjects(
    currentPage.value,
    10,
    filterParams.value.startDate,
    filterParams.value.endDate,
    searchQuery.value,
    filterParams.value.skillName
  );
};

onMounted(() => {
  fetchProjects();
});

watch([searchQuery, filterParams], () => {
  handlePageChange(0);
});

</script>
