<template>
    <!-- @vue-ignore -->
   <div v-if="$auth.loggedIn">
    <div  >
        <ul class="flex gap-4 mb-10 justify-between w-[400px] items-center" >
            <li v-for="p,i in userMenu" class="
            underline-none 
            ">
            <a :href="p.url" :key="i" class="underline-none">{{ p.title }}</a>
        </li>
        <a class="bg-black rounded-md text-white p-4 cursor-pointer" @click="logout">
            Logout
        </a>
        </ul>
       
    </div>
        <UserProfile :data="userData" />
        
        
   </div>
    <div
    v-else
        class="container d-flex justify-content-center align-items-center"
        style="height: 100vh"
  >
    <slot />
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import UserProfile from '@/views/User/UserProfile.vue';
import { useRoute } from 'vue-router';
import { useAuthStore } from '../stores/useAuth';
import { useRoleStore } from '../stores/useRoles';
import { MENU } from '../constants/menu';
const userMenu = ref<any>([])
const route = useRoute();
const auth = useAuthStore();
const roles = useRoleStore();
onMounted(() => {
    // get the roles and show the user menu
    MENU.forEach((m: any) => {
        // check if the user has the role to see the menu
        userMenu.value.push(m);
    });
})
const userData = {
    name: 'Aldi',
    email: 'aldikrasniqi5@gmail.com',
    roles: ['admin']
}
const logout = () => {
    auth.logout();
}

</script>