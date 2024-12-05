<template>
  <div class="w-full min-h-screen">
    <div class="w-full">
      <div v-if="applications.volunteerApplications?.length === 0" class="">
        <h1 class="w-full text-3xl mb-5 p-4">Not Application Yet</h1>
      </div>
      <h1 class="w-full text-3xl mb-5 font-medium p-4" v-else>Applications</h1>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <div v-for="application in applications.volunteerApplications">
        <ApplicationCard
          :applicationId="application.id"
          :companyName="application.companyName"
          :status="application.status"
          :applicationDate="application.applicationDate"
          :volunteer-name="
            application.volunteer
              ? `${application.volunteer.firstName} ${application.volunteer.lastName}`
              : undefined
          "
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useApplications } from '@/stores/useApplications';
import { onMounted } from 'vue';
import ApplicationCard from '@/components/ApplicationCard.vue';

const applications = useApplications();

onMounted(() => {
  applications.fetchApplications();
});
</script>
