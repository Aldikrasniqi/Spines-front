
<template>
  <!-- @vue-expect-error -->
  <div class="header__style" v-if="$auth.loggedIn">
    <!-- @vue-ignore -->
    <div class="">
      <nav
        class="flex w-full justify-between items-center p-4 max-w-6xl mx-auto"
      >
        <div>
          <a
            href="/"
            class="font-sans font-extrabold text-blue text-3xl tracking-widest"
            >SPINES</a
          >
          
        </div>
        <div>
            <a href="/feed" class="font-medium" >Feeds</a>
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
            class="z-10 hidden absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
          >
            <a
              href="/profile"
              class="px-4 py-3 text-sm text-gray-900 dark:text-white"
            >
              <div>
                <span class="font-medium">{{ userData.name }}</span>
              </div>
              <div class="font-medium truncate">
                {{ userData.email }}
              </div>
              <div>
                
              </div>
            </a>
            <div class="py-1">
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                @click="logout"
                >Sign out</a
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
const auth = useAuthStore();
const userData = {
  name: 'Aldi',
  email: 'aldikrasniqi5@gmail.com',
  roles: ['admin'],
};
const togleDropDown = () => {
  const dropdown = document.getElementById('userDropdown');
  dropdown?.classList.toggle('hidden');
};
const logout = () => {
  auth.logout();
};
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
