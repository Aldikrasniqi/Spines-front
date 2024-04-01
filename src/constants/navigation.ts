export const navigationMenu  = [
  {
    url: '/dashboard',
    title: 'Dashboard',
    id: 'dashboard',
    class: 'text-light-black font-sans font-medium text-base',
    menuGroup: 'dashboard',
    premissions: ['admin'],
  },
  {
    url: '/about',
    title: 'About',
    id: 'about',
    class: 'text-light-black font-sans font-medium text-base',
    menuGroup: 'auth',
  },
  
  {
    url: '/login',
    title: 'Login',
    id: 'login',
    class: 'font-sans font-medium text-base text-blue',
    menuGroup: 'auth',
  },
  {
    url: '/register',
    title: 'Sign Up',
    id: 'register',
    class: 'px-6 py-2.5 bg-blue font-medium tracking-wider text-white rounded-md hover:bg-blue-600',
    menuGroup: 'auth',
  },
 
];
