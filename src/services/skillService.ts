import axiosInstance from "@/plugins/axios";
import type {Skills} from "@/interfaces/Skills";
import type {AxiosError} from "axios";
import router from "@/router";
import {useAuthStore} from "@/stores/useAuth";

export async function getSkills(){
    try {
        const response = await axiosInstance.get<Skills[]>('/skills');
        return response.data;
    } catch (error: any) {
        const { response } = error

        switch(response?.status){
            case 401:
                await useAuthStore().logout();
                await router.push({name: 'Login'});
                break;
        }

    }
}