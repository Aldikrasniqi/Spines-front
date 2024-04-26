<template>
  <main class="max-w-full bg-white flex items-center lg:p-20 p-10">
    <div class="max-w-6xl mx-auto">
      <div class="flex w-full flex-wrap flex-row justify-between items-center">
        <div class="flex flex-col gap-4">
          <h1 class="text-4xl font-bold tracking-wider text-dark-gray">
            Client comments
          </h1>
          <p class="w-2/3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet lacus et odio aliquet fermentum.
          </p>
        </div>
        <div class="flex gap-1">
          <FontAwesomeIcon
            :icon="faArrowLeft"
            class="bg-white rounded-full text-blue border border-blue px-3.5 py-3 text-sm cursor-pointer hover:border-light-gray hover:bg-light-gray"
          />
          <FontAwesomeIcon
            :icon="faArrowRight"
            class="bg-blue rounded-full text-white border border-blue px-3.5 py-3 text-sm cursor-pointer hover:border-light-gray hover:bg-light-gray"
          />
        </div>
      </div>
      <div class="flex lg:flex-row flex-col justify-center items-center gap-2 max-w-6xl mr-auto mt-10">
        <div v-for="person in comments" class="mt-4 lg:w-1/3 h-[350px] w-full">
          <CommentsCard
            :image="person.image"
            :name="person.name"
            :comment="person.comment"
            :position="person.position"
          />
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import CommentsCard from '@/components/CommentsCard.vue';
const comments = ref([
  {
    image:
      'https://cdn4.iconfinder.com/data/icons/images-image-files-7/24/round_image_circle_picture_photo_photography-512.png',
    name: 'John Doe',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus et odio aliquet fermentum.',
    position: 'CEO',
  },
  {
    image:
      'https://cdn4.iconfinder.com/data/icons/images-image-files-7/24/round_image_circle_picture_photo_photography-512.png',
    name: 'Jane Doe',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus et odio aliquet fermentum.',
    position: 'CTO',
  },
  {
    image:
      'https://cdn4.iconfinder.com/data/icons/images-image-files-7/24/round_image_circle_picture_photo_photography-512.png',
    name: 'John Doe',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus et odio aliquet fermentum.',
    position: 'CEO',
  },
]);
</script>
