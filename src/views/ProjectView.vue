<script setup lang="ts">
import { markRaw, onMounted, ref, computed } from 'vue';
import Applications from '@/components/Applications.vue';
import SingleProjectView from '@/views/SingleProjectView.vue';
import { useAuthStore } from '@/stores/useAuth';
import { useApplications } from '@/stores/useApplications';
import TabMenu from 'primevue/tabmenu';

const componentsMap: Record<string, any> = {
  Projects: markRaw(SingleProjectView),
  Applications: markRaw(Applications),
};

const activeField = ref('Projects');
const activeComponent = ref(componentsMap['Projects']);

const setActiveField = (field: string) => {
  activeField.value = field;
  activeComponent.value = componentsMap[field];
};

onMounted(() => {
  useApplications().fetchApplications();
});

const authStore = useAuthStore();
const applicationsStore = useApplications();

const items = computed(() => {
  const tabItems = [{ label: 'Projects', field: 'Projects' }];
  if (!authStore.isUser && applicationsStore.volunteerApplications) {
    tabItems.push({ label: 'Applications', field: 'Applications' });
  }
  return tabItems;
});

const handleTabChange = (event: { index: number }) => {
  const selectedItem = items.value[event.index];
  if (selectedItem) {
    setActiveField(selectedItem.field);
  }
};
</script>

<template>
  <div class="w-full px-1 md:w-2/3 lg:w-3/4 mx-auto">
    <TabMenu
      :model="items"
      :activeItem="items[0]"
      @tab-change="handleTabChange"
    />
    <component :is="activeComponent" />
  </div>
</template>

<style scoped></style>
