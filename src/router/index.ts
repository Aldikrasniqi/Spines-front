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
      requireAuth: false,
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
      requireAuth: false,
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
      requireAuth: false,
    },
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      layout: 'auth',
      menuGroup: 'auth',
      requireAuth: false,
    },
    component: () => import('@/views/AboutView.vue'),
  },
  {
    path: '/feed',
    name: 'feed',
    meta: {
      layout: 'auth',
      menuGroup: 'auth',
      requireAuth: true,
    },
    component: () => import('@/views/FeedView.vue'),
  },
  {
    path: '/projects/:id',
    name: 'project',
    meta: {
      layout: 'auth',
      menuGroup: 'auth',
      requireAuth: true,
    },
    component: () => import('@/views/SingleProjectView.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    meta: {
      layout: 'auth',
      menuGroup: 'main',
      requireAuth: false,
      },
    component: () => import('@/views/NotFoundPage.vue'),
  }
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
