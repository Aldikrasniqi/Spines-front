<template>
<main class="max-w-full bg-light-silver lg:p-20 p-5 flex items-center">
    <div class="max-w-6xl mx-auto gradient rounded-xl">
        <div class="flex justify-between flex-wrap items-center h-full">
            <div class="lg:w-1/2 w-full">
                <div class="flex flex-col justify-start items-start gap-8 p-10">
                    <h1 class="text-4xl font-bold text-white">Explore New Jobs Now</h1>
                    <p class=" text-white text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum est sint sunt porro vero cupiditate esse doloremque tenetur voluptatum distinctio in nobis saepe placeat architecto numquam quaerat, dolorum rem ducimus!</p>
                    <button class="px-6 py-2 bg-white text-primary rounded-md font-medium">Get Started</button>
                </div>
            </div>
            <div class="lg:w-1/2 w-full">
                <img src="../../assets/images/9X1A1393-removebg-preview.png" alt="Job Search" class="rounded-e-lg" />
            </div>
        </div>
    </div>
</main>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
</script>
<style scoped>
.gradient {
    background: linear-gradient(0deg, #299DF2 4%, #113ed2 94%);
    opacity: 0.93;
}
</style>