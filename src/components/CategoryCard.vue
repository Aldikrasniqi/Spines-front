<template>
<div class="rounded-lg text-light-black bg-white mt-10  h-[10rem] p-10">
    <h1 class="text-light-black text-xl mb-2">{{ title }}</h1>
    <div class="flex items-center">
        <div class="flex gap-6 items-center text-gray justify-start w-full">
            <div>
                <FontAwesomeIcon
                :icon="faStar"
                class="text-[#375ee7]"
                v-for="i in rating"
                :key="i"
            />
            {{ rating }} rate
            </div>
            <div>
                <span class="text-sm mb-0.5 text-gray">{{ skills }} skills</span>
            </div>
            
        </div>
    </div>
</div>
</template>
<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { defineProps } from 'vue';
defineProps({
  title: String,
  rating: Number,
  skills: Number,
});
</script>