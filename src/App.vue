<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <component :is="$route.meta.layout ? $route.meta.layout : 'main'">
      <router-view  view v-slot="{ Component }">
        <transition name="route" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </component>
</template>
<style scoped>
.header__style{
  background: rgb(180,222,245);
  background: linear-gradient(87deg, rgba(180,222,245,0.4051995798319328) 4%, rgba(252,253,254,1) 48%, rgba(213,237,245,0.53125) 100%);
}
.route-enter-active,
.route-leave-active,
.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.1s ease;
}

.route-enter-from,
.route-leave-to,
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
}
</style>  