import { defineStore } from 'pinia';
import {
  applyToProject,
  createProject,
  fetchProject,
  fetchProjectById,
} from '../services/projectsService';
import type { Project, ProjectResponse } from '@/interfaces/projects';

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    projects: {} as ProjectResponse,
    project: {} as Project | null,
    projectLoading: false,
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
    createProjectErrors: {
      name: '',
      type: '',
      requirements: '',
      information: '',
    } as any,
    searchQuery: '',
    singleProject: {} as any,
    pagination: {
      total: 0,
      per_page: 10, // required
      current_page: 1, // required
      last_page: 0, // required
      from: 1,
      to: 12,
    },
    search: '',
    filterParams : ({
      startDate: '',
      endDate: '',
      companyName: '',
      skillName: [],
    })
    
  }),
  actions: {
    async createProjects() {
      this.createProjectErrors = {
        name: '',
        type: '',
        requirements: '',
        information: '',
      };
      const payload = this.projectCredentials;
      console.log(payload);

      // Validation logic
      if (payload.name.length < 2) {
        this.createProjectErrors.name = 'Name minimum length is 2';
      }
      if (payload.requirements.length < 20) {
        this.createProjectErrors.requirements =
          'Requirements minimum length is 20';
      }
      if (payload.information.length < 10) {
        this.createProjectErrors.information =
          'Information minimum length is 10';
      }
      if (payload.type.length < 20) {
        this.createProjectErrors.type = 'Type minimum length is 20';
      }

      // Check if there are any errors
      Object.keys(this.createProjectErrors).forEach((key) => {
        console.log(key);
        if (this.createProjectErrors[key]) {
          console.log('error');
          return;
        }
      });

      try {
        const response = await createProject(payload);
        if (response) {
          return response;
        }
      } catch (error) {
        console.error(error);
      }
    },
    async fetchProjects(page?: number, size?: number, startDate?: string, endDate?: string, companyName?: string, skillName?: string[]) {
      try {
        const response = await fetchProject(page, size, startDate, endDate, companyName, skillName);
        console.log(response);
        this.pagination = {
          total: response.totalElements,
          per_page: response.pageable.pageSize,
          current_page: response.current_page || 1,
          last_page: response.totalPages,
          from: response.from,
          to: response.to,
        };
        this.projects = response;
        return response;
      } catch (error) {
        console.error('Error fetching projects:', error);
        throw error; // Re-throw the error after logging it
      }
    },
    async fetchProjectsById(id: string) {
      try {
        this.projectLoading = true;
        const response = await fetchProjectById(id);
        if (response) {
          this.project = response.data;
        }
        if (response) {
          this.singleProject = response;
        }
        this.projectLoading = false;

      } catch (error) {
        this.projectLoading = false;
      }
    },
    async apply(){
        try {
            const response = await applyToProject(this.project?.id!);
            if (response) {
             await this.fetchProjectsById(this.project?.id!);
             return response;
            }
        } catch (error) {
            console.error(error);
        }
    }
  },
  getters: {},
});
