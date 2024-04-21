<template>
    <nav class="flex w-full justify-between items-center p-4 max-w-6xl mx-auto">
        <a href="/" class="font-sans font-extrabold text-blue text-3xl tracking-widest">JOB</a>
        <ul class="flex gap-4">
        <li v-for="item in navigationMenu" :key="item.id">
            <router-link :to="item.url" :class="item.class">{{ item.title }}</router-link>
        </li>
    </ul>
    </nav>    
</template>
<script setup lang="ts">
import { navigationMenu } from '@/constants/navigation';
</script>       