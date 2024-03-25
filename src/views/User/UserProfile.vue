<template>
    <div>
        <h1>User Profile</h1>
        <p>{{ user }}</p>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const user = ref('John Doe')
</script>