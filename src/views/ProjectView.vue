<script setup lang="ts">
import {markRaw, onMounted, ref} from "vue";
import Applications from "@/components/Applications.vue";
import SingleProjectView from "@/views/SingleProjectView.vue";
import {useAuthStore} from "@/stores/useAuth";
import {useApplications} from "@/stores/useApplications";

const componentsMap: Record<string, any> = {
  'Projects': markRaw(SingleProjectView),
  'Applications': markRaw(Applications),
};

const activeField = ref('Projects');

const activeComponent = ref(componentsMap['Projects']);

const setActiveField = (field: string) => {
  activeField.value = field;
  activeComponent.value = componentsMap[field];
};

onMounted(() => {
  useApplications().fetchApplications();
})
</script>

<template>

  <div class="w-full px-1 md:w-2/3 lg:w-3/4 mx-auto lg:px-20 ">
  <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
    <li class="me-2">
      <a  @click="setActiveField('Projects')" aria-current="page" class="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500">Projects</a>
    </li>
    <li v-if="!useAuthStore().isUser && useApplications().volunteerApplications!!" class="me-2">
      <a @click="setActiveField('Applications')" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Applications</a>
    </li>

  </ul>
    <component :is="activeComponent" />

  </div>

</template>

<style scoped>

</style>