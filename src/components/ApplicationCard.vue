<template>
  <div
      class="rounded-lg p-4 w-full text-white gradient cursor-pointer overflow-hidden"
  >
    <div class="flex flex-col gap-6 p-4">
      <h1 class="text-2xl font-medium">{{ projectName }}</h1>
      <span v-if="companyName">{{ companyName }} - {{new Date(applicationDate).toUTCString()}}</span>
      <span v-if="volunteerName">{{ volunteerName }} - {{new Date(applicationDate).toUTCString()}}</span>
      <div class="flex gap-1 w-full">
        <button
            class="rounded-full p-2 text-sm text-white bg-blue opacity-100"
        >
          {{ status }}
        </button>
      </div>
      <div class="flex gap-1 w-full" v-if="!auth.isUser && status === 'PENDING'">
        <button
            class="bg-light-gray rounded-lg text-dark-gray px-4 py-2 hover:bg-dark-gray hover:text-white"
            @click="changeStatus('ACCEPTED')"
        >
          Accept
        </button>
        <!-- TODO: Fix the apply with a modal dialog -->
        <button
            class="bg-primary rounded-lg text-white px-4 py-2 hover:bg-dark-blue hover:text-white"
            @click="changeStatus('REJECTED')"
        >
          Reject
        </button>
      </div>

    </div>
  </div>
</template>


<script setup lang="ts">

import {useAuthStore} from "@/stores/useAuth";
import {useApplications} from "@/stores/useApplications";

const props = defineProps<{
  applicationId?: string;
  companyName?: string;
  projectName: string;
  status: string;
  applicationDate: string;
  volunteerName?: string;
}>();


const auth = useAuthStore()

async function changeStatus(status: string) {
  await useApplications().updateStatus(props.applicationId!, status)
}
</script>

<style scoped>
.gradient {
  background: linear-gradient(0deg, #299df2 4%, #113ed2 94%);
  opacity: 0.93;
}
</style>