<template>
  <div class="max-w-full bg-light-silver lg:p-20 p-10">
    <div class="flex flex-col max-w-6xl mx-auto">
      <h1 class="font-bold text-3xl text-light-black">
        Browse Talent by Category
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <template v-for="category in categories" :key="category.title">
          <CategoryCard :title="category.title" :rating="category.rating" :skills="category.skills" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CategoryCard from '@/components/CategoryCard.vue';
import type { Categories } from '../../interfaces/categories';
import { ref } from 'vue';

const categories = ref<Categories[]>([
  {
    title: 'Web Development',
    rating: 1,
    skills: 5,
  },
  {
    title: 'Mobile Development',
    rating: 1,
    skills: 5,
  },
  {
    title: 'Data Science',
    rating: 1,
    skills: 5,
  },
  {
    title: 'Design',
    rating: 1,
    skills: 5,
  },
  {
    title: 'Costumer Service',
    rating: 1,
    skills: 5,
  },
  {
    title: 'Marketing',
    rating: 1,
    skills: 5,
  },
  {
    title: 'Writing',
    rating: 1,
    skills: 5,
  },
  {
    title: 'Video & Animation',
    rating: 1,
    skills: 5,
  },
])
</script>

<style scoped></style>
