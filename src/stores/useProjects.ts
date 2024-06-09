import { defineStore } from 'pinia';
import {
  createProject,
  fetchProject,
  fetchProjectById,
} from '../services/projectsService';
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
    singleProject: {} as any,
    pagination: {
      page: 1,
      itemsPerPage: 10,
      totalItems: 0,
    },
  }),
  actions: {
    async createProjects() {
      const payload = this.projectCredentials;
      try {
        const response = await createProject(payload);
        if (response) {
          return response;
        }
      } catch (error) {
        console.error(error);
        // Handle the error appropriately
      }
    },
    async fetchProjects() {
      try {
        const response = await fetchProject();
        console.log(response);
        this.projects = response;
      } catch (error) {}
    },
    async fetchProjectsById(id: string) {
      try {
        const response = await fetchProjectById(id);
        if (response) {
          this.project = response.data;
        }
        if (response) {
          this.singleProject = response;
        }
      } catch (error) {}
    },
    filterProjects() {
      console.log(this.searchQuery);
      this.filteredProjects = this.projects.filter((project) => {
        return project.name
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase());
      });
    },
  },
  getters: {
    
  },
});
