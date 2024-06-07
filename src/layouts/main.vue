<template>
    <!-- @vue-ignore -->
   <div v-if="$auth.loggedIn" class="">
        <nav class="flex w-full justify-between items-center p-4 max-w-6xl mx-auto">
            <div>
                <a href="/" class="font-sans font-extrabold text-blue text-3xl tracking-widest">SPINES</a>
            </div>
            <div>
                <img id="avatarButton" type="button" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" class="w-10 h-10 rounded-full cursor-pointer" src="../assets/images/anash copy.jpg" alt="User dropdown" @click="togleDropDown">

            <!-- Dropdown menu -->
            <div id="userDropdown" class="z-10 hidden absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600" >
                <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
                <div>
                    <span class="font-medium">{{userData.name}}</span>
                </div>
                <div class="font-medium truncate">
                    {{userData.email}}
                </div>
                </div>
                <div class="py-1">
                <a href="" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" @click="logout">Sign out</a>
                
                </div>
            </div>
            </div>
        </nav>
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
const dropdown = ref(false);
const togleDropDown = () => {
    const dropdown = document.getElementById('userDropdown');
    dropdown?.classList.toggle('hidden');
}

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