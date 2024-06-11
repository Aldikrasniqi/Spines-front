<template>
  <main class="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4 mx-auto lg:p-20 p-3">
    <h1 class="text-5xl font-semibold mb-10">Basic Informations</h1>
    <div class="flex flex-col gap-4 w-full">
      <div class="">
        <h2 class="text-xl font-semibold text-dark-blue mb-2">
          Project information
        </h2>
        <span class="text-gray">
          {{ textFormatter(projects.project?.information) }}
        </span>
      </div>

      <div>
        <h2 class="text-xl font-semibold text-dark-blue mb-2">
          Project requirements
        </h2>
        <span class="text-gray text-wrap w-1/3">
          {{ textFormatter(projects.project?.requirements) }}
        </span>
      </div>
      <div>
        <h2 class="text-xl font-semibold text-dark-blue mb-2">
          Organization type
        </h2>
        <span class="text-gray">
          {{ projects.project?.type }}
        </span>
      </div>
      <div class="flex flex-col">
        <h2 class="text-xl font-semibold text-dark-blue mb-2">Company</h2>
        <span class="text-gray">
          <span class="font-bold">Company name:</span>
          {{ projects.project?.company?.companyName }}
        </span>
        <span class="text-gray">
          <span class="font-bold"> Help Description: </span>
          {{ projects.project?.company?.helpDescription }}
        </span>
        <span class="text-gray">
          <span class="font-bold"> Company Address: </span>
          {{ projects.project?.company?.address }}
        </span>
        <span class="text-gray">
          <span class="font-bold"> Company email: </span>
          {{
            projects.project?.company?.email
              ? projects.project?.company?.email
              : 'No email provided'
          }}
        </span>
        <span class="text-gray">
          <span class="font-bold"> Comapny organization type: </span>
          {{ projects.project?.company?.organizationType }}
        </span>
        <span class="text-gray">
          <span class="font-bold"> Company phone number: </span>
          {{ projects.project?.company?.phoneNumber }}
        </span>
      </div>
      <div class="self-end mt-6">
        <div class="flex flex-row gap-2">
          <RouterLink
            to="/feed"
            class="bg-light-gray rounded-lg text-dark-gray px-4 py-2 hover:bg-dark-gray hover:text-white"
          >
            Back 
          </RouterLink>
          <!-- TODO: Fix the apply with a modal dialog -->
          <button
            class="bg-primary rounded-lg text-white px-4 py-2 hover:bg-dark-blue hover:text-white"
            @click="apply"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useProjectsStore } from '../stores/useProjects';
import { useRouter } from 'vue-router';
const projects = useProjectsStore();
const router = useRouter();
const id = router.currentRoute.value.params.id as string;

const textFormatter = (text?: string) => {
  if (text) {
    return text.slice(1, text.length - 1);
  }
};

const apply = () => {
  // TODO: Implement the apply method
  // if (projects.project) {
  //   projects.applyToProject(projects.project.id);
  // }
};

onMounted(() => {
  projects.fetchProjectsById(id);
  if (!projects.project) {
    router.push({ name: 'feed' });
  }
});
</script>
