<template>
  <main
    class="lg-2xl max-w-6xl mx-auto flex flex-wrap lg:justify-start justify-center lg:text-start text-center items-center overflow-hidden lg:py-20 pt-10 lg:pt-0 lg:pb-0"
  >
    <div class="lg:w-1/2 pb-4 pt-4">
      <div class="flex items-center lg:justify-start justify-center gap-4 mb-4">
        <label class="inline-flex items-center cursor-pointer justify-center">
          <input
            class="sr-only peer"
            type="checkbox"
            value=""
            checked
            disabled
          />
          <div
            class="relative w-16 h-7 bg-gray rounded-full peer dark:bg-gray peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:start-[20px] after:bg-white after:border-gray after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray peer-checked:bg-primary"
          ></div>
        </label>
        <h1 class="font-medium text-xl">Find your dream job</h1>
      </div>
      <h1 class="text-5xl font-bold mb-4 tracking-wide leading-12">
        Freelance Jobs <br />
        and Talents at Your Fingertips
      </h1>
      <p class="font-sans text-xl w-full tracking-wide">
        Connect with top freelancers and <br />
        clients on our platform! find your perfect match for your next project.
      </p>
      <div
        class="flex lg:justify-start justify-center -space-x-2 rtl:space-x-reverse mt-6 mb-2"
      >
        <img
          v-for="tab in usersProfileTabs"
          :key="tab.key"
          :src="tab.source"
          class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
        />
      </div>
      <p class="font-medium text-lg mt-2">
        Over <span class="text-blue font-bold"> 12800+ </span> freelancers to
        <br />
        complete your projects
      </p>
    </div>
    <div class="lg:w-1/2 lg:block w-full md:hidden hidden">
      <div class="flex flex-row-reverse relative">
        <img
          src="../../assets/images/person.png"
          alt="hero"
          class="w-full h-full object-cover translate-x-4 translate-y-14"
        />
        <div
          class="card absolute translate-y-32 -translate-x-4 right-10 bg-whitfig z-100 rounded-lg px-10 py-6 shadow-xl flex flex-col items-center"
        >
          <h1 class="font-bold text-xl">30K+ 💼</h1>
          <p>People got hired</p>
        </div>
      </div>
    </div>
    <div></div>
  </main>
</template>
<script setup lang="ts">
import { usersProfileTabs } from '../../constants/general';
</script>
<style></style>
