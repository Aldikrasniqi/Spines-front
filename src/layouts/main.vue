<template>
    <!-- @vue-ignore -->
   <div v-if="$auth.loggedIn" class="">
     <nav
         class="flex w-full justify-between items-center py-4 max-w-6xl mx-auto"
     >
       <div  class="flex w-1/5 items-center justify-between  py-6 max-w-6xl">
         <button
             @click="goToHome"
             class="font-sans font-extrabold text-blue text-3xl tracking-widest"
         >SPINES</button
         >
         <div>
           <button @click="goToFeed" class="font-medium" >Feed</button>
         </div>
       </div>
            <div>
                <img id="avatarButton" type="button" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" class="w-10 h-10 rounded-full cursor-pointer" src="../assets/images/anash copy.jpg" alt="User dropdown" @click="togleDropDown">

            <!-- Dropdown menu -->
            <div id="userDropdown" class="z-10 hidden absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600" >
                <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
                <div>
                    <span class="font-medium">{{auth.isUser ? `${auth.user.firstName} ${auth.user.lastName}` : auth.company.companyName}}</span>
                </div>
                <div class="font-medium truncate">
                    {{auth.isUser ? `${auth.user.email} ` : auth.company.email}}
                </div>
                </div>
                <div class="py-1">
                <button class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" @click="logout">Sign out</button>
                
                </div>
            </div>
            </div>
        </nav>
        <UserProfile />
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
import router from "@/router";
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


const logout = async () => {
   await auth.logout();
}

const goToFeed = () => {
  router.push({name: 'feed'})
}

const goToHome = () => {
  router.push({name: 'home'})
}

</script>