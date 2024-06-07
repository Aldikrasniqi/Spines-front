<template>
    <div class="card flex justify-center">
      <button
        type="button"
        icon="pi pi-ellipsis-v"
        @click="toggle"
        aria-haspopup="true"
        aria-controls="overlay_menu"
        class="bg-primary rounded-xl text-white p-3"
      >
        Filter
      </button>
      <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" class=""/>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import Menu from 'primevue/menu';
  
  const menu = ref();
  const items = ref([
    {
      label: 'Options',
      items: [
        { label: 'Refresh', icon: 'pi pi-refresh' },
        { label: 'Export', icon: 'pi pi-upload' },
      ],
    },
  ]);
  
  const toggle = (event: any) => {
    menu.value.toggle(event);
  };
  </script>
  
  <style scoped>
  </style>
  