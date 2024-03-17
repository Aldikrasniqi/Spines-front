<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <header>

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink class="font-sans font-bold p-2 text-green" to="/">Home</RouterLink>
        <RouterLink class="font-sans p-2 font-bold text-blue" to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
