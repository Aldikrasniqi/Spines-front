<script setup lang="ts">
  const { text } = defineProps<{
    text: string
  }>()
</script>

<template>
  <button
      class="text-white w-full bg-ex-light-blue text-center p-2 rounded-lg mb-2 hover:bg-dark-blue"
  >
    {{ text }}
  </button>
</template>

<style scoped>

</style>