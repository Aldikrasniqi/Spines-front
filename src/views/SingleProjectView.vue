<template>
  <main class="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4 mx-auto">
    <h1>etst</h1>
</main>
</template>
<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useProjectsStore } from '../stores/useProjects';
import { useRouter } from 'vue-router';
const projects = useProjectsStore();


const router = useRouter();

const id = router.currentRoute.value.params.id;

console.log(id);
onMounted(() => {
    
});
</script>