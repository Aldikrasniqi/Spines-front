<template>
    <div class="flex w-full h-screen items-center justify-between">
        <div>
            <RegisterForm />
        </div>
        <div class="w-1/2">
            <img src="../assets/images/image.png" alt="logo" class="w-full" />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import RegisterForm from '@/components/forms/RegisterForm.vue';
</script>