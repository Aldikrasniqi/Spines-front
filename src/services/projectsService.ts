import axiosInstance from "@/plugins/axios"
import { API_URL } from '@/constants/api';
import type { Project } from "@/interfaces/projects";

export const createProject = async (payload: Project) => {
    try {
        const response = await axiosInstance.post(`${API_URL}projects`, payload);
    } catch (error) {
        
    }
}

export const fetchProjects = async () => {
    try {
        const response = await axiosInstance.get(`${API_URL}projects`);
    } catch (error) {
        
    }
}

export const updateProjects = async (id: string, payload: Project) => {
    try {
        const response = await axiosInstance.put(`${API_URL}projects/${id}`, payload);
    } catch (error) {
        
    }
}   

export const fetchProjectById = async (id: string) => {
    try {
        const response = await axiosInstance.get(`${API_URL}projects/${id}`);
    } catch (error) {
        
    }
}