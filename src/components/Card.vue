<template>
  <div class="rounded-lg p-4 lg:w-2/5 w-full text-white gradient cursor-pointer">
      <div class="flex flex-col gap-6 p-4">
          <h1 class="text-2xl font-medium">{{ title }}</h1>
          <div class="flex gap-1 w-full">
              <button class="rounded-full px-4 py-2 text-white bg-blue opacity-100">{{ typeOfWork }}</button>
              <button class="rounded-full px-4 py-2 text-white bg-blue opacity-100">{{ typeOfOpportunity }}</button>
          </div>
          <span class="text-dark-green text-xl font-medium tracking-wide">
              {{ salary }}$ - {{ maxSalary }}$
          </span>
          <div class="flex items-center gap-4">
              <hr class="flex-1">
               <span>1h ago</span>
          </div>
          <div class="flex items-center justify-between">
             <div class="flex items-center gap-3">
              <div class="bg-white rounded-xl p-1">
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.0001 33.2588L26.501 19.4064H17.499L22 33.2588H22.0001Z" fill="#E24329"/>
              <path d="M22 33.2587L17.499 19.4063H11.1912L22 33.2587Z" fill="#FC6D26"/>
              <path d="M11.1911 19.4063L9.82339 23.616C9.76257 23.8032 9.76257 24.0048 9.82336 24.1919C9.88416 24.3791 10.0026 24.5422 10.1618 24.6578L22 33.2588L11.191 19.4064L11.1911 19.4063Z" fill="#FCA326"/>
              <path d="M11.1912 19.4064H17.499L14.7883 11.0632C14.6488 10.6338 14.0414 10.6339 13.902 11.0632L11.1912 19.4064Z" fill="#E24329"/>
              <path d="M22 33.2587L26.501 19.4063H32.8089L21.9999 33.2587H22Z" fill="#FC6D26"/>
              <path d="M32.8089 19.4063L34.1767 23.616C34.2375 23.8032 34.2375 24.0048 34.1766 24.1919C34.1158 24.3791 33.9973 24.5422 33.8381 24.6578L22.0001 33.2588L32.8089 19.4064V19.4063Z" fill="#FCA326"/>
              <path d="M32.8089 19.4064H26.501L29.2118 11.0632C29.3513 10.6338 29.9587 10.6339 30.0981 11.0632L32.8089 19.4064Z" fill="#E24329"/>
              </svg>
             </div>
             <div class="self-start">
                  <h1>Gitlab</h1>
                  <span>
                      <span>1200 - 1300</span>
                  </span>
             </div>
             </div>
             <div>
                  <span class="text-black bg-dark-green px-3 py-1.5 font-medium rounded-full">20 Jobs</span>
             </div>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  typeOfWork: String,
  typeOfOpportunity: String,
  salary: String,
  maxSalary: String,
});


</script>

<style scoped>
.gradient {
  background: linear-gradient(0deg, #299DF2 4%, #113ed2 94%);
  opacity: 0.93;
}
</style>
