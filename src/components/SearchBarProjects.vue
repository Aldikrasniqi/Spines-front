<template>
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
      v-model="projects.search"
    />
  </div>
</template>

<script setup lang="ts">
import { useProjectsStore } from '@/stores/useProjects';
import { computed, watch } from 'vue';

const projects = useProjectsStore() as any;
const search = computed(() => projects.search);
watch(search, (newVal, oldVal) => {
  console.log('Search changed from', oldVal, 'to', newVal);
});
</script>

<style scoped></style>
