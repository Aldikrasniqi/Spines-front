<template>
  <main class="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4 mx-auto">
    <div>
      <div class="w-full px-6 pb-8 mt-8 sm:rounded-lg">
        <h2 class="pl-6 text-2xl font-bold sm:text-4xl">Projects feed</h2>
        <div>
          <div class="p-6 flex items-center w-full justify-between gap-2">
            <SearchBar />
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
            <FilterMenu />
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <!-- @vue-ignore -->
        <template
          v-for="project in projects.projects.content"
          :key="project.type"
        >
          <ProjectsCard
            :name="project.name"
            :type="project.type"
            :requirements="project.requirements"
            :information="project.information"
            :skills="project.skills"
            :company="project.company"
            :to="{ name: 'project', params: { id: project.id } }"
          />
        </template>
      </div>
      <div>
        <Paginator
          :totalRecords="projects.projects?.totalElements"
          :rows="projects.projects.size"
          :currentPage="currentPage"
          @onPageChange="projects.fetchProjects"
        />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useAuthStore } from '../stores/useAuth';
import SearchBar from '@/components/SearchBarProjects.vue';
import CreateProjectDialog from '@/components/CreateProjectDialog.vue';
import FilterMenu from '@/components/FilterMenu.vue';
import { useProjectsStore } from '@/stores/useProjects';
import ProjectsCard from '@/components/ProjectsCard.vue';
import Button from 'primevue/button';
import Paginator from 'primevue/paginator';
const currentPage = ref(0);
const auth = useAuthStore();
const projects = useProjectsStore();
const visible = ref(false);

const emits = {
  closeModal: () => (visible.value = false),
};
onMounted(() => {
  projects.fetchProjects();
  console.log(projects.projects);
});

// pagination





</script>

<style scoped></style>
