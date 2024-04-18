<template>
    <div class="max-w-6xl mx-auto">
        <NavigationBar />
        <slot />
    </div>
</template>
<script setup lang="ts">
import NavigationBar from '@/components/NavigationBar.vue';
</script>