<template>
    <div>
        <NavigationBar />
        <slot />
    </div>
</template>
<script setup lang="ts">
import NavigationBar from '@/components/NavigationBar.vue';
</script>