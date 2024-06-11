<template>
  <main class="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4 mx-auto">
    <div>
      <div class="w-full px-6 pb-8 mt-8 sm:rounded-lg">
        <h2 class="pl-6 text-2xl font-bold sm:text-4xl">Projects feed</h2>
        <div>
          <div class="p-6 flex items-center w-full justify-between gap-2">
            <SearchBar />
            <!-- @vue-expect-error -->
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
            <FilterMenu />
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <template
          v-for="project in projects.projects.content"
          :key="project.id"
        >
          <ProjectsCard
            :name="project.name"
            :type="project.type"
            :requirements="project.requirements"
            :information="project.information"
            :skills="project.skills!"
            :company="project.company!"
            :to="{ name: 'project', params: { id: project.id! } }"
          />
        </template>
      </div>
      </div>
        <div class="flex w-full mx-auto justify-center p-4">
          <button
            @click="handlePageChange(currentPage - 1)"
            :disabled="isPreviousDisabled"
            class="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50"
          >
            Previous
          </button>
          <button
            @click="handlePageChange(currentPage + 1)"
            :disabled="isNextDisabled"
            class="flex items-center justify-center px-3 h-8 ms-3 text-sm font-medium text-gray bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50"
          >
            Next
          </button>
        </div>
  </main>
</template>


<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useAuthStore } from '../stores/useAuth';
import SearchBar from '@/components/SearchBarProjects.vue';
import CreateProjectDialog from '@/components/CreateProjectDialog.vue';
import FilterMenu from '@/components/FilterMenu.vue';
import { useProjectsStore } from '@/stores/useProjects';
import ProjectsCard from '@/components/ProjectsCard.vue';
import Button from 'primevue/button';

const currentPage = ref(0);
const auth = useAuthStore();
const projects = useProjectsStore();
const visible = ref(false);

const emits = {
  closeModal: () => (visible.value = false),
};

const isPreviousDisabled = computed(() => currentPage.value <= 0);
const isNextDisabled = computed(() => projects.projects.totalPages === undefined || currentPage.value >= projects.projects.totalPages - 1);

const handlePageChange = (page: number) => {
  if (page < 0 || page >= projects.projects.totalPages) {
    return;
  }

  currentPage.value = page;
  projects.fetchProjects(currentPage.value, 10);
};

onMounted(() => {
  handlePageChange(0);
});
</script>

<style scoped></style>
