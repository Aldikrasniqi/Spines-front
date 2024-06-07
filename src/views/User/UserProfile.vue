<template>
  <div class="lg-2xl max-w-7xl mx-auto bg-white w-full flex flex-col  md:flex-row text-[#161931]">
    <aside class="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
      <div class="sticky flex flex-col gap-2 p-4 text-sm border-r border-indigo-100 top-12">
        <h2 class="pl-3 mb-4 text-2xl font-semibold">Settings</h2>

        <a
          href="#"
          class="flex items-center px-3 py-2.5 font-bold bg-white text-indigo-900 hover:border border rounded-full"
          v-for="item in profileFields"
          :class="{ 'btn': true, 'active': activeField === item }"
          @click="setActiveField(item)"
          :style="{'border-color': activeField === item ? '#6366F1' : 'transparent'}"
          :key="item"
        >
          {{ item }}
        </a>
      </div>
    </aside>
    <component :is="activeComponent" />
  </div>
</template>

<script lang="ts" setup>
import { ref, markRaw } from 'vue';
const profileFields = ref([
  'Public Profile',
  'Account Settings',
  'Notifications',
  'PRO Account',
]);
const activeField = ref('Public Profile');
import ProfileEdit from '@/components/ProfileEdit.vue';
import AccountSettings from '@/components/AccountSettings.vue';
import Notifications from '@/components/Notifications.vue';
import ProAccount from '@/components/ProAccount.vue';

const componentsMap: Record<string, any> = {
  'Public Profile': markRaw(ProfileEdit),
  'Account Settings': markRaw(AccountSettings),
  'Notifications': markRaw(Notifications),
  'PRO Account': markRaw(ProAccount),
};

const activeComponent = ref(componentsMap['Public Profile']);

const setActiveField = (field: string) => {
  console.log(field);
  activeField.value = field;
  activeComponent.value = componentsMap[field];
};
</script>