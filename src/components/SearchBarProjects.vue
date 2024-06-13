<template>
  
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useProjectsStore } from '@/stores/useProjects';

const projects = useProjectsStore();
const searchQuery = ref('');

watch(searchQuery, (newVal) => {
  projects.search = newVal;
  projects.fetchProjects(0, 10); // Assuming 10 is the page size
});
</script>

<style scoped></style>
