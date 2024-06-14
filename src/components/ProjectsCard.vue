<template>
    <router-link
      :to="to"
      class="rounded-lg p-4 w-full text-white gradient cursor-pointer overflow-hidden"
    >
      <div class="flex flex-col gap-6 p-4">
        <h1 class="text-2xl font-medium">{{ name }}</h1>
        <span>Company: {{ company.companyName }}</span>
        <div class="flex gap-1 w-full flex-wrap">
          <button
            class="rounded-full p-2 text-sm text-white bg-blue opacity-100"
            v-for="skill in skills"
            :key="skill.id"
          >
            <span class="w-full">
              {{ skill.name ? textFormatter(skill.name) : 'No skills' }}
            </span>
          </button>
        </div>
      </div>
    </router-link>
  </template>
  

  <script setup lang="ts">
  import type {Company} from "@/interfaces/company";

  export interface Skill {
    id: number;
    name: string;
  }
  
  interface Route {
    name: string;
    params: {
      id: string;
    };
  }
  
  const props = defineProps<{
    name: string;
    type: string;
    requirements: string;
    information: string;
    skills: Skill[];
    company: Company;
    to: Route;
  }>();


  const textFormatter = (text: string) => {
    return text.length > 8 ? text.slice(0, 11) + '...' : text;
  };
  </script>
  
<style scoped>
.gradient {
  background: linear-gradient(0deg, #299df2 4%, #113ed2 94%);
  opacity: 0.93;
}
</style>