<template>
  <div class="border border-light-gray p-8 flex items-center justify-center h-full rounded-xl">
      <div class="flex flex-col items-center justify-center gap-4">
      <img :src="image" alt="placeholder" class="w-16 h-16 rounded-full text-center" />
      <div class="flex flex-col text-center gap-4">
          <p class="text-sm">{{ comment }}</p>
        <h1 class="text-lg font-bold">{{ name }}</h1>
        <p class="text-sm">{{ position }}</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
defineProps({
  image: String,
  name: String,
  comment: String,
  position: String,
});
</script>
