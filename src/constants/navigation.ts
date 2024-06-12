export const navigationMenu = [
  {
    url: '/about',
    title: 'About',
    id: 'about',
    class: 'text-light-black font-sans font-medium lg:text-base text-sm',
    menuGroup: 'auth',
  },

  {
    url: '/login',
    title: 'Login',
    id: 'login',
    class: 'font-sans font-medium lg:text-base text-blue text-sm',
    menuGroup: 'auth',
  },
  {
    url: '/register',
    title: 'Sign Up',
    id: 'register',
    class:
      'lg:px-6 lg:py-2.5 p-2 bg-blue font-medium tracking-wider text-white rounded-md hover:bg-blue-600',
    menuGroup: 'auth',
  },
];
