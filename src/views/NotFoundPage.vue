<template>
   <section class="h-screen flex items-center">
    <div class="py-8 px-4 mx-auto max-w-screen-xl">
        <div class="mx-auto max-w-screen-sm text-center">
            <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary">404</h1>
            <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
                {{ errorMessage.message }}
            </p>
            <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
            <RouterLink to="/" class="inline-flex text-white bg-blue hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">Back to Homepage</RouterLink>
        </div>   
    </div>
</section>
  </template>
  <script lang="ts">

  import { defineComponent } from 'vue';
  
  export default defineComponent({
    props: ['code'],
    name: 'NotFoundPage',
    computed: {
      errorMessage() {
        switch (this.code) {
          case '404':
            return {
              message: 'Not found.',
              code: this.code,
            }
          case '403':
            return {
              message: 'Access denied.',
              code: this.code,
            }
          default:
            return {
              message: 'Somthing is missing.',
              code: this.code,
            }
        }
      },
    },
  });
  </script>
  