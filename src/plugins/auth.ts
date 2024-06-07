import { useAuthStore } from "@/stores/useAuth";

export default {
    install: ({ config } : any, callback: any) => {
        config.globalProperties.$auth = useAuthStore();

        if (useAuthStore().isLoggedIn) {
            useAuthStore().decodeToken();
            useAuthStore().getUser();
           callback();
          }
        else callback();
    },
  };