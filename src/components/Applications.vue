<template>
  <div>
  <div class="w-full">
    <h1 class="w-full text-6xl mb-5">Applications</h1>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div  v-for="application in applications.volunteerApplications">

            <ApplicationCard
                :applicationId="application.id"
                :companyName="application.companyName"
                :projectName="application.projectName"
                :status="application.status"
                :applicationDate="application.applicationDate"
                :volunteer-name="application.volunteer ? `${application.volunteer.firstName} ${application.volunteer.lastName}` : undefined"
            />
        </div>
  </div>
  </div>
</template>

<script setup lang="ts">
import {useApplications} from "@/stores/useApplications";
import {onMounted} from "vue";
import ApplicationCard from "@/components/ApplicationCard.vue";

const applications = useApplications();

onMounted(() => {
    applications.fetchApplications();
})
</script>