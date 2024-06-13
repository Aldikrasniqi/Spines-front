import axiosInstance from "@/plugins/axios"
import { API_URL } from '@/constants/api';
import type { Project } from "@/interfaces/projects";
import Swal from "sweetalert2";

export const createProject = async (payload: Project) => {
    try {
        const response = await axiosInstance.post(`${API_URL}projects`, payload);

        Swal.fire({
            icon: 'success',
            title: 'Project Created',
            showConfirmButton: false,
            timer: 1500
        })

        return response
    } catch (error) {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
        })
        
    }
}

export const fetchProject = async (page: number = 0, size: number = 10, startDate?: string, endDate?: string, companyName?: string, skillName: string[] = []) => {
    const queryParams = new URLSearchParams();
    queryParams.append('page', page.toString());
    queryParams.append('size', size.toString());
    if (startDate) queryParams.append('startDate', startDate);
    if (endDate) queryParams.append('endDate', endDate);
    if (companyName) queryParams.append('companyName', companyName);
    skillName.forEach(skill => queryParams.append('skillName', skill));
  
    try {
      const response = await axiosInstance.get(`${API_URL}projects?${queryParams.toString()}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching projects:', error);
      throw error;  // Re-throw the error after logging it
    }
  };
export const updateProjects = async (id: string, payload: Project) => {
    try {
        const response = await axiosInstance.put(`${API_URL}projects/${id}`, payload);
    } catch (error) {
        
    }
}

export const applyToProject = async (id: string) => {
    try {
        const response = await axiosInstance.post(`${API_URL}volunteers/apply?projectId=${id}`);
        return response;
    } catch (error) {

    }

}
export const fetchProjectsByCompany = async () => {
    try {
        const response = await axiosInstance.get(`${API_URL}companies/me/projects`);

        return response.data;
    } catch (error) {

    }
}

export const fetchProjectById = async (id: string) => {
    try {
        const response = await axiosInstance.get(`${API_URL}projects/${id}`);
        return response
    } catch (error) {
        
    }
}