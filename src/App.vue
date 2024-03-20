<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue';
</script>

<template>
  <div class="max-w-6xl mx-auto">
    <header>
    <NavigationBar />
  </header>

  <RouterView />
  </div>
</template>
