<template>
  <h1 class="text-5xl font-sans font-bold mb-10 text-light-black">Register</h1>
  <div class="w-full">
    <div class="relative">
      <ul
        class="flex flex-row flex-wrap font-medium text-center text-gray-500 dark:text-gray-400 mx-auto tabs-list"
        data-tabs="tabs"
        role="list"
      >
        <li
          v-for="tab in registerTabs"
          :key="tab.key"
          :class="{ 'border-b border-blue': activeTab === tab.key }"
          class="w-1/2 cursor-pointer"
        >
          <a
            @click="setActiveTab(tab.key)"
            :class="{ 'text-blue border-blue': activeTab === 'private' }"
            class="flex flex-row items-center justify-center p-4 border-b-1 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
            data-tab-target=""
            active
            role="tab"
            :aria-selected="activeTab === tab.key"
          >
            <span class="ml-1"
              :class="{ 'text-blue': activeTab === tab.key }"
            >{{ tab.title }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <RegisterUserForm :isUser="activeTab" />
  <RegisterCompanyForm :isCompany="activeTab" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { registerTabs } from '../../constants/general';
import RegisterUserForm from './UserRegisterForm.vue';
import RegisterCompanyForm from './CompanyRegisterForm.vue';
const activeTab = ref('user');
const setActiveTab = (tab: string) => {
  activeTab.value = tab;
};
</script>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
