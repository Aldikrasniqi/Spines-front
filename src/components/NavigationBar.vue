<template>
    <nav class="flex w-full justify-between items-center p-4">
        <h1 class="font-sans font-bold text-green text-3xl">Logo</h1>
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