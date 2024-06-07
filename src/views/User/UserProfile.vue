<template>
  <div class="flex w-full justify-between py-4 max-w-6xl mx-auto flex-col  md:flex-row text-[#161931]">
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
const activeField = ref('Public Profile');
import ProfileEdit from '@/components/ProfileEdit.vue';
import AccountSettings from '@/components/CompanyProjects.vue';
import Notifications from '@/components/Notifications.vue';
import ProAccount from '@/components/ProAccount.vue';
import {useAuthStore} from "@/stores/useAuth";

const auth = useAuthStore()

const profileFields = ref([
  'Public Profile',
]);

if(!auth.isUser && auth.company){
  profileFields.value.push('Projects');
}

if(auth.isUser && auth.user){
  profileFields.value.push('Applications');
}

const componentsMap: Record<string, any> = {
  'Public Profile': markRaw(ProfileEdit),
  'Projects': markRaw(AccountSettings),
  'Applications': markRaw(Notifications),
  'PRO Account': markRaw(ProAccount),
};

const activeComponent = ref(componentsMap['Public Profile']);

const setActiveField = (field: string) => {
  console.log(field);
  activeField.value = field;
  activeComponent.value = componentsMap[field];
};
</script>