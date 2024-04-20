<template>
    <main class="h-[400px] bg-white">
      <div class="flex flex-row flex-wrap justify-between items-center">
        <h1 class="text-3xl text-black font-bold">
          <span class="text-blue">Latest</span> Job Opportunities
        </h1>
        <div class="flex gap-1">
          <FontAwesomeIcon
            :icon="faArrowLeft"
            class="bg-white rounded-full text-black border px-2.5 py-2 text-2xl cursor-pointer hover:border-light-gray hover:bg-light-gray"
          />
          <FontAwesomeIcon
            :icon="faArrowRight"
            class="bg-black rounded-full text-white px-2.5 py-2 text-2xl cursor-pointer"
          />
        </div>
      </div>
      <div class="flex justify-center items-center mt-6">
        <div class="w-1/3 flex gap-3">
          <div class="w-1 h-60 text-gray bg-primary p-1 rounded"></div>
          <ul>
            <li
              v-for="opportunity in opportunities"
              :key="opportunity.title"
              class="text-2xl text-black font-bold"
            >
              <button
                class="hover:text-blue"
                @click="selectOpportunity(opportunity)"
                :class="{ ' p-2 rounded-md bg-primary text-white hover:text-white ms-2': selectedOpportunity === opportunity }"
              >
                {{ opportunity.title }}
              </button>
            </li>
          </ul>
        </div>
        <div class="w-4/6">
          <Card
            v-if="selectedOpportunity"
            :title="selectedOpportunity.title"
            :typeOfWork="selectedOpportunity.typeOfWork"
            :typeOfOpportunity="selectedOpportunity.typeOfOpportunity"
            :salary="selectedOpportunity.salary"
            :maxSalary="selectedOpportunity.maxSalary"
          />
        </div>
      </div>
    </main>
  </template>
  
  <script setup lang="ts">
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
  import { ref } from 'vue';
  import Card from '../Card.vue';
  import type { Opportunities } from '../../interfaces/Opportunities';
  
  const opportunities = ref<Opportunities[]>([
    {
      title: 'Frontend Developer',
      typeOfWork: 'Full Time',
      typeOfOpportunity: 'Product',
      salary: '30K',
      maxSalary: '45K',
    },
    {
      title: 'Backend Developer',
      typeOfWork: 'Part Time',
      typeOfOpportunity: 'Product',
      salary: '30K',
      maxSalary: '45K',
    },
    {
      title: 'Fullstack Developer',
      typeOfWork: 'Full Time',
      typeOfOpportunity: 'Product',
      salary: '30K',
      maxSalary: '45K',
    },
    {
      title: 'DevOps Engineer',
      typeOfWork: 'Full Time',
      typeOfOpportunity: 'Product',
      salary: '30K',
      maxSalary: '45K',
    },
    {
      title: 'Data Scientist',
      typeOfWork: 'Full Time',
      typeOfOpportunity: 'Product',
      salary: '30K',
      maxSalary: '45K',
    },
    {
        title: 'Designer',
        typeOfWork: 'Full Time',
        typeOfOpportunity: 'Head of Design',
        salary: '80K',
        maxSalary: '110K',
    }
  ]);
  
  const selectedOpportunity = ref<Opportunities | null>(null);
  
  function selectOpportunity(opportunity: Opportunities) {
    selectedOpportunity.value = opportunity;
  }
  </script>
  