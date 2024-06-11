<template>
    <div :class="classProp" v-if="error">
      {{ error }}
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  
  const { error, classProp } = defineProps<{
    error?: string;
    classProp: string;
  }>();
  </script>
  