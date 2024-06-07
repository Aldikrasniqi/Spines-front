<template>
  <main class="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4 mx-auto lg:p-20">
    <h1 class="text-2xl font-semibold">Basic Informations</h1>
    <div>
      <div class="flex flex-col">
        <h2 class="text-xl font-semibold text-primary">
          Project information
        </h2>
        <span>{{ projects.project?.information }} </span>
      </div>
      <h1>{{ projects.project?.name }}</h1>
      <h1>
        
      </h1>
    </div>
  </main>
</template>
<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useProjectsStore } from '../stores/useProjects';
import { useRouter } from 'vue-router';
const projects = useProjectsStore();
const router = useRouter();
const id = router.currentRoute.value.params.id as string;
onMounted(() => {
  projects.fetchProjectsById(id);
  console.log(projects.project);
});
</script>
