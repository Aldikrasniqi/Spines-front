import { defineStore } from 'pinia';
import { createProject, fetchProject } from '../services/projectsService';
import type { Project } from '@/interfaces/projects';

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    projects: [] as Project[],
    project: {} as Project | null,
    loading: false,
    error: null as string | null,
    projectCredentials: {
      name: '',
      type: '',
      requirements: '',
      information: '',
      skillsIds: [] as string[],
    } as Project,
    filteredProjects: [] as Project[],
    searchQuery: '',
  }),
  actions: {
    async createProjects() {
      const payload = this.projectCredentials;
      try {
        const response = await createProject(payload);
        if(response){
          return response
        }
      } catch (error) {
        console.error(error);
        // Handle the error appropriately
      }
    },
    async fetchProjects() {
      try {
        const response = await fetchProject();
        this.projects = response
      } catch (error) {
        
      }
    },
    filterProjects() {
      console.log(this.searchQuery);
      this.filteredProjects = this.projects.filter((project) => {
        return project.name.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    },
  },
  getters: {},
});