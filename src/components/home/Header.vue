<template>
    <main class="lg-2xl h-[550px] flex items-center overflow-hidden">
      <div class="w-[800px]">
        <div class="flex items-center gap-4 mb-4">
          <label class="inline-flex items-center cursor-pointer justify-center">
          <input class="sr-only peer" type="checkbox" value="" checked disabled>
            <div
              class="relative w-16 h-7 bg-gray rounded-full peer dark:bg-gray peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
            peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:start-[20px] after:bg-white after:border-gray after:border
             after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray peer-checked:bg-primary"></div
            >
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
        <div class="flex -space-x-2 rtl:space-x-reverse mt-6 mb-2">
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
      <div class="w-full ">
       <div class="flex flex-row-reverse relative">
        <img
          src="https://s3-alpha-sig.figma.com/img/ebbd/78e6/c042ceab8b8404d2a015f0122935ea2f?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jDDjQdGl0z9ZltipwACUeBBqHHkWUECl51u9yOKP-znG55OIGMbMTkCB5sbjVJsske-xAM9Dc8uIwNGTCwZFkpyx74wgy9AMwGDWXU2BOBHJlCutYds3zgmyfsJ8gy~nx4EQr2Q-RNISm7d7P6rp1EcXkcO-Xtv1HNSUeXqEW7Y6CjbheNOgD-lCJmdOSZD3JpSP41H1RD~egYf8H99x1CTr7k70QcsM3h9RdA4Z7mRnyFUJKWTcnxo3X8X25nKMSTlTF3RAV5r7VmUos8gxwlSHdrqm-rhltvNJGA1bqMuv4nJ2Za2AhbLXzaCFKWh-njPfdrAuHOSRnR37CDw~Lg__"
          alt="hero"
          class="w-full h-full object-cover translate-x-4 translate-y-14"
        />
        <div class="card absolute translate-y-32 -translate-x-4 right-10 bg-whitfig z-100 rounded-lg px-10 py-6 shadow-xl flex flex-col items-center">
          <h1 class="font-bold text-xl">30K+ 💼</h1>
          <p>People got hired</p>
       </div>
       </div>
      </div>
      <div>
      </div>
  </main>
    
  </template>
  <script setup lang="ts">
  import { usersProfileTabs } from '../../constants/general';
  </script>
<style>

</style>