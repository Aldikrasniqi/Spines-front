<template>
    <div class="lg:flex md:flex w-full h-screen overflow-hidden items-center justify-between gap-2 p-2 max-w-6xl mx-auto">
        <div class="lg:w-2/5 w-full">
            <RegisterForm />
        </div>
        <div class="lg:w-1/2 w-full">
            <img src="../assets/images/image.png" alt="logo" class="w-full" />
        </div>
    </div>
</template>
<script lang="ts" setup>
import RegisterForm from '@/components/forms/RegisterForm.vue';
</script>