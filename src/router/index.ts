import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
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
  const auth = useAuthStore();
  if (auth.isLoggedIn) {
    next({ name: 'profile' });
  } else {
    next();
  }
};

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
    beforeEnter: redirectIfAuthenticated,
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue'),
    beforeEnter: redirectIfAuthenticated,
  },
  {
    path: '/profile',
    name: 'dashboard',
    component: () => import('@/views/User/UserProfile.vue'),
    meta: { 
      requiresAuth: true,
      layout: 'dashboard'
     },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
  }
  // {
  //   path: '/:pathMatch(.*)*',
  //   name: 'not-found',
  //   component: () => import('../views/NotFoundView.vue'),
  // },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  const auth = useAuthStore();
  if(to.meta.requiresAuth && !auth.isLoggedIn) next({name: 'login'});
  else if(!to.meta.reqiresAuth && auth.isLoggedIn) next({name: 'dashboard'});
  else next();
  
});

export default router;
