import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/useAuth';

import type {
  RouteRecordRaw,
  NavigationGuardNext,
  RouteLocationNormalized,
} from 'vue-router';

const redirectIfAuthenticated = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  if (useAuthStore().loggedIn) next({ name: 'Dashboard' });
  else next();
};

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      layout: 'auth',
      menuGroup: 'home',
    },
  },
  {
    path: '/dashboard',
    component: () => import('@/views/User/UserProfile.vue'),
    name: 'Dashboard',
    meta: {
      layout: 'main',
      menuGroup: 'dashboard',
      requireAuth: true,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginView.vue'),
    beforeEnter: redirectIfAuthenticated,
    meta: {
      layout: 'auth',
      menuGroup: 'auth',
    },
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue'),
    beforeEnter: redirectIfAuthenticated,
    meta: {
      menuGroup: 'auth',
      layout: 'auth',
    },
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      layout: 'auth',
      menuGroup: 'auth',
    },
    component: () => import('@/views/AboutView.vue'),
  },

  // {
  //   path: '/:pathMatch(.*)*',
  //   name: 'not-found',
  //   component: () => import('../views/NotFoundView.vue'),
  // },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth && !useAuthStore().loggedIn) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router;
