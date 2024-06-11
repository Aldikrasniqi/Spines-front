import { useAuthStore } from "@/stores/useAuth";

export default {
    install: async ({ config } : any, callback: any) => {
        config.globalProperties.$auth = useAuthStore();

        if (useAuthStore().isLoggedIn) {
            useAuthStore().decodeToken();
           callback();
          }
        else callback();
    },
  };