
<template>
  <!-- @vue-expect-error -->
  <div class="header__style" v-if="$auth.loggedIn">
    <!-- @vue-ignore -->
    <div class="">
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
          <img
            id="avatarButton"
            type="button"
            data-dropdown-toggle="userDropdown"
            data-dropdown-placement="bottom-start"
            class="w-10 h-10 rounded-full cursor-pointer"
            src="../assets/images/anash copy.jpg"
            alt="User dropdown"
            @click="togleDropDown"
          />
          
          <!-- Dropdown menu -->
          <div
            id="userDropdown"
            class="z-10 hidden px-2 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
          >
            <a
              href="/profile"
              class="px-4 py-3 text-sm text-gray-900 dark:text-white"
            >
              <div>
                <span class="font-medium">{{ auth.isUser ? `${auth.user.firstName} ${auth.user.lastName}` : auth.company.companyName }}</span>
              </div>
              <div class="font-medium truncate">
                {{ auth.isUser ? auth.user.email : auth.company.email }}
              </div>
              <div>
                
              </div>
            </a>
            <div class="py-1">
              <button
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                @click="logout"
                >Sign out</button
              >
            </div>
          </div>
        </div>
      </nav>
      <slot />
    </div>
  </div>
  <div class="header__style" v-else>
        <div class="">
            <NavigationBar />
            <slot />
        </div>
    </div>
</template>
<script setup lang="ts">
import NavigationBar from '@/components/NavigationBar.vue';
import { useAuthStore } from '../stores/useAuth';
import router from "@/router";
const auth = useAuthStore();

const togleDropDown = () => {
  const dropdown = document.getElementById('userDropdown');
  dropdown?.classList.toggle('hidden');
};
const logout = async () => {
  await auth.logout();
};

const goToFeed = () => {
  router.push({name: 'feed'})
}

const goToHome = () => {
  router.push({name: 'home'})
}
</script>
<style scoped>
.header__style {
  background: rgb(180, 222, 245);
  background: linear-gradient(
    87deg,
    rgba(180, 222, 245, 0.4051995798319328) 4%,
    rgba(252, 253, 254, 1) 48%,
    rgba(213, 237, 245, 0.53125) 100%
  );
}
</style>
