import {defineStore} from "pinia";
import type {Skills} from "@/interfaces/Skills";
import {getSkills} from "@/services/skillService";

export const useSkills = defineStore("skills", {
    state: () => ({
        skills: [] as Skills[] | undefined
    }),
    getters: {
        getSkills(state) {
            return state.skills;
        }
    },
    actions: {
        async fetchSkills() {
            this.skills = await getSkills();
        }
    }
})