import type {ProjectCreateProps} from "@/interfaces/Project";
import axiosInstance from "@/plugins/axios";

export function addProject(project: ProjectCreateProps) {
    return axiosInstance.post("/projects", project);
}