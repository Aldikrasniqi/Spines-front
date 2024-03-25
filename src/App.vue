<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue';
</script>

<template>
  <div class="header__style">
    <div class="max-w-6xl mx-auto">
      <header>
        <NavigationBar />
      </header>
    
    </div>
    <RouterView />
  </div>    
</template>
<style scoped>
.header__style{
  background: rgb(180,222,245);
  background: linear-gradient(87deg, rgba(180,222,245,0.4051995798319328) 4%, rgba(252,253,254,1) 48%, rgba(213,237,245,0.53125) 100%);
}
</style>  