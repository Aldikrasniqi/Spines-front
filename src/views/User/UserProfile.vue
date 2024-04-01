
<template>
    <div>
        <h1>User Profile</h1>
        <div>
            <p>Name: {{ props.data.first_name }}</p>
            <p>Email: {{ props.data.email }}</p>
            <p>Roles: {{ props.data.roles}}</p>
        </div>
    </div>
</template>
<script lang="ts" setup>
import type { User } from '../../interfaces/User';
const props = defineProps<{
    data: User
}>();
</script>