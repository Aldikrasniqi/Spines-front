<template>
    <div class="lg:flex md:flex w-full h-screen items-start mt-32 justify-between gap-2 p-2">
        <div class="lg:w-2/5 mt-20">
            <RegisterForm />
        </div>
        <div class="lg:w-1/2">
            <img src="../assets/images/image.png" alt="logo" class="w-full" />
        </div>
    </div>
</template>
<script lang="ts" setup>
import RegisterForm from '@/components/forms/RegisterForm.vue';
</script>