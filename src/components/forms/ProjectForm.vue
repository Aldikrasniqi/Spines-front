<script setup lang="ts">

import BlueButton from "@/components/buttons/BlueButton.vue";
import { useSkills } from "@/stores/useSkills";
import {useProject} from "@/stores/useProject";

const projectsStore = useProject();
const skillsStore = useSkills();

skillsStore.fetchSkills();

</script>

<template>
  <section class="bg-white dark:bg-gray-900" >
    <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new Project</h2>
      
    </div>
  </section>

</template>

<style scoped>

</style>