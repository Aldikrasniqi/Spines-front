<template>
    <main class="h-[400px]">
        <div class="flex flex-row flex-wrap justify-between items-center">
            <h1 class="text-3xl text-black font-bold">
                <span class="text-blue">Latest</span> Job Opportunities
            </h1>
            <div class="flex gap-1">
                <FontAwesomeIcon :icon="faArrowLeft" class=" bg-white rounded-full text-black border px-2.5 py-2 text-2xl cursor-pointer" />
                <FontAwesomeIcon :icon="faArrowRight" class=" bg-black rounded-full text-white px-2.5 py-2 text-2xl cursor-pointer" />
            </div>
        </div>
        <div class="flex justify-center items-center mt-6">
            <div class="w-1/3 flex gap-3">
                <div class="w-1 h-60 text-gray bg-primary p-1 rounded"></div>
                <ul>
                    <li v-for="opportunity in opportunities" :key="opportunity" class="text-2xl text-black font-bold">
                        <button class="hover:text-blue">{{ opportunity }}</button>
                    </li>
                </ul>
            </div>
            <div class="w-4/6">
                
            </div>
        </div>
    </main>
</template>
<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ref } from 'vue';
const opportunities = ref([
    'Frontend Developer',
    'Backend Developer',
    'Fullstack Developer',
    'UI/UX Designer',
    'Product Manager',
    'Project Manager',
    'Data Analyst',
]);
</script>