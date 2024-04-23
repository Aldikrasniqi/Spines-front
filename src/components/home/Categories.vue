<template>
    <div class="flex flex-col max-w-6xl mx-auto h-[830px]">
        <h1 class="font-bold text-3xl text-light-black">Browse Talent by Category</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CategoryCard title="Web Development" :rating="1" :skills="5" />
            <CategoryCard title="Mobile Development" :rating="1" :skills="5" />
            <CategoryCard title="Data Science" :rating="1" :skills="5" />
            <CategoryCard title="Design" :rating="1" :skills="5" />
            <CategoryCard title="Costumer Service" :rating="1" :skills="5" />
            <CategoryCard title="Marketing" :rating="1" :skills="5" />
            <CategoryCard title="Writing" :rating="1" :skills="5" />
            <CategoryCard title="Video & Animation" :rating="1" :skills="5" />
        </div>

    </div>
</template>
<script setup lang="ts">
import CategoryCard from '@/components/CategoryCard.vue';
</script>
<style scoped>
</style>