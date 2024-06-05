<script setup lang="ts">
  import {useAuthStore} from "@/stores/useAuth";
  import ProjectForm from "@/components/forms/ProjectForm.vue";

  const auth = useAuthStore();

</script>

<template>

  <div v-if="auth.user.roles?.includes('COMPANY')" >
    <ProjectForm/>
  </div>
</template>

<style scoped>

</style>