import type { Project } from '@/interfaces/projects';
import { defineStore } from 'pinia';

export const useProjectsStore = defineStore('projects', {
    state: () => ({
        projects: [],
        project: {},
        loading: false,
        error: null,
        projectCredentials: {} as Project,
    }),
    actions: {
        async createProject() {
            console.log('create project');
            console.log(this.projectCredentials);
        }
    },
    getters: {},
})