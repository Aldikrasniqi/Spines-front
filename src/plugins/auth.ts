import { useAuthStore } from "@/stores/useAuth";

export default {
    install: ({ config } : any, callback: any) => {
        config.globalProperties.$auth = useAuthStore();

        if (useAuthStore().isLoggedIn) {
          console.log('User is logged in');
           callback();
          }
        else callback();
    },
  };