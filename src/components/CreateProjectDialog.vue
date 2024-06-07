<template>
  <Dialog
    v-model:visible="visible" 
    modal
    header="Create Project"
    :style="{ maxWidth: '45rem' }"
  >
    <form @submit.prevent="handleSubmit">
      <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <div class="w-full">
          <label
            for="name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Project Name</label
          >
          <input
            type="text"
            v-model="projectsStore.projectCredentials.name"
            name="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Project name"
            required
          />
        </div>
        <div class="w-full">
          <label
            for="type"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Project Type</label
          >
          <input
            type="text"
            name="type"
            v-model="projectsStore.projectCredentials.type"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Project type"
            required
          />
        </div>
        <div class="sm:col-span-2">
          <label
            for="information"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Information</label
          >
          <input
            type="text"
            name="information"
            v-model="projectsStore.projectCredentials.information"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Project information"
            required
          />
        </div>
        <div class="sm:col-span-2">
          <label
            for="name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Skills</label
          >
          <div class="mt-1 text-sm text-gray-500 dark:text-gray-300">
            Skills needed to apply to this project.
          </div>
          <ul
            class="flex flex-row flex-wrap overflow-hidden items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <li
              v-for="skill in skillsStore.getSkills"
              :key="skill.id"
              class="lg:w-1/2 w-full dark:border-gray-600"
            >
              <div class="flex items-center ps-3 w-full">
                <input
                  :id="skill.id"
                  :value="skill.id"
                  v-model="projectsStore.projectCredentials.skillsIds"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  :for="skill.id"
                  class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >{{ skill.name }}</label
                >
              </div>
            </li>
          </ul>
        </div>
        <div class="sm:col-span-2">
          <label
            for="requirements"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Requirements</label
          >
          <textarea
            v-model="projectsStore.projectCredentials.requirements"
            rows="8"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Your description here"
          ></textarea>
        </div>
      </div>
      <div class="flex justify-end gap-2 mt-2">
        <Button
          type="button"
          label="Cancel"
          severity="secondary"
          @click="emitCloseModal"
          class="bg-field-error"
        ></Button>
        <Button
          type="submit"
          label="Save"
          @click="handleSubmit()"
          class="text-white"
        ></Button>
      </div>
    </form>
  </Dialog>
</template>

<script setup lang="ts">
import { ref, onMounted, defineEmits } from 'vue';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import { useProjectsStore } from '../stores/useProjects';
import { useSkills } from '../stores/useSkills';

const visible = ref(false);
const projectsStore = useProjectsStore();
const skillsStore = useSkills();

const emit = defineEmits(['closeModal']);

const handleSubmit = async () => {
  const response = await projectsStore.createProjects()
  if(response){
    emit('closeModal');
  }
};

const emitCloseModal = () => {
  emit('closeModal');
};

onMounted(() => {
  skillsStore.fetchSkills();
});
</script>

<style scoped></style>
