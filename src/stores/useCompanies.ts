import {defineStore} from "pinia";
import type {Project} from "@/interfaces/projects";
import {fetchProjectsByCompany} from "@/services/projectsService";
import {useAuthStore} from "@/stores/useAuth";

export const useCompaniesStore = defineStore('companies', {
  state() {
    return {
      projects: [] as Project[],
    }
  },
    actions: {
        async fetchProjects() {
            this.projects = await fetchProjectsByCompany();
        },
    }
})