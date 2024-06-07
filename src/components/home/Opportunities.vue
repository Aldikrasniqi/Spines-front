<template>
  <main class=" max-w-full bg-white overflow-hidden">
    <div class="max-w-6xl mx-auto p-6">   
      <div class="flex flex-row flex-wrap justify-between items-center">
        <h1 class="text-3xl text-light-black font-bold">
          <span class="text-blue">Latest</span> Job Opportunities
        </h1>
        <div class="flex gap-1">
          <FontAwesomeIcon
            :icon="faArrowLeft"
            class="bg-white rounded-full text-black border px-2.5 py-2 text-2xl cursor-pointer hover:border-light-gray hover:bg-light-gray"
          />
          <FontAwesomeIcon
            :icon="faArrowRight"
            class="bg-black rounded-full text-white px-2.5 py-2 text-2xl cursor-pointer"
          />
        </div>
      </div>
      <div class="flex justify-center items-center flex-wrap mt-6">
        <div class="lg:w-1/3 w-full flex gap-3">
          <div class="lg:block md:hidden sm:hidden hidden w-2 h-74 text-gray bg-light-gray rounded">
            <div
              v-for="(opportunity, index) in opportunities"
              :key="index"
              class="h-12 w-1 rounded p-1"
              :style="{ backgroundColor: getIndicatorColor(opportunity.title) }"
            ></div>
          </div> 
          <div class="flex lg:flex-col flex-row flex-wrap items-center gap-3 p-0.5">
            <button
              v-for="button in opportunities"
              :key="button.title"
              :class="{ btn: true, active: activeButton === button.title }"
              @mousedown="handleButtonClick(button.title)"
              @click="selectOpportunity(button)"
              :style="{ '--offset': getIndicatorOffset(button.title) + 'px' }"
            >
              <span class="relative z-50">{{ button.title }}</span>
              <div class="indicator" :class="{ active: activeButton === button.title }"></div>
            </button>
          </div>
        </div>
        <div class="lg:w-4/6 w-full">
          <Card
            v-if="selectedOpportunity"
            :title="selectedOpportunity.title"
            :typeOfWork="selectedOpportunity.typeOfWork"
            :typeOfOpportunity="selectedOpportunity.typeOfOpportunity"
            :salary="selectedOpportunity.salary"
            :maxSalary="selectedOpportunity.maxSalary"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ref, computed } from 'vue';
import type { Opportunities } from '@/interfaces/Opportunities';
import ProjectsCard from '../ProjectsCard.vue';
import Card from '../Card.vue';

const opportunities = ref<Opportunities[]>([
  {
    title: 'Frontend Developer',
    typeOfWork: 'Full Time',
    typeOfOpportunity: 'Product',
    salary: '30K',
    maxSalary: '45K',
  },
  {
      title: 'Backend Developer',
      typeOfWork: 'Part Time',
      typeOfOpportunity: 'Product',
      salary: '30K',
      maxSalary: '45K',
    },
    {
      title: 'Fullstack Developer',
      typeOfWork: 'Full Time',
      typeOfOpportunity: 'Product',
      salary: '30K',
      maxSalary: '45K',
    },
    {
      title: 'DevOps Engineer',
      typeOfWork: 'Full Time',
      typeOfOpportunity: 'Product',
      salary: '30K',
      maxSalary: '45K',
    },
    {
      title: 'Data Scientist',
      typeOfWork: 'Full Time',
      typeOfOpportunity: 'Product',
      salary: '30K',
      maxSalary: '45K',
    },
    {
        title: 'Designer',
        typeOfWork: 'Full Time',
        typeOfOpportunity: 'Head of Design',
        salary: '80K',
        maxSalary: '110K',
    }
]);

const activeButton = ref("Frontend Developer");
const selectedOpportunity = ref<Opportunities | null>(opportunities.value[0]);

const handleButtonClick = (button: string) => {
  activeButton.value = button;
};

function selectOpportunity(opportunity: Opportunities) {
  selectedOpportunity.value = opportunity;
}

const getIndicatorColor = computed(() => {
  return (title: string) => {
    return activeButton.value === title ? '#375ee7' : 'transparent';
  };
});

const getIndicatorOffset = computed(() => {
  return (title: string) => {
    const index = opportunities.value.findIndex(opportunity => opportunity.title === title);
    return index * 26; // Assuming the width of each indicator is 26px
  };
});
</script>

<style scoped>
.btn {
  width: 10.875rem;
  cursor: pointer;
  background: transparent;
  border: 0;
  box-shadow: none;
  outline: none;
  font-size: 14px;
  border-radius: 1rem;
  position: relative;
  text-align: left;
  padding: 0.5rem 1rem;
  transition: color 200ms ease-in-out;
  overflow: hidden;
}

.indicator {
  display: block;
  background-color: #375ee7;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  transition: all 200ms ease-in-out;
  border-radius: 1rem;
}

.btn.active .indicator {
  height: 100%;
}

.btn.active {
  color: white;
  position: relative;
  z-index: 2;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
../../interfaces/opportunities