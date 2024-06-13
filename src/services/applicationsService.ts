import axiosInstance from "@/plugins/axios";
import {API_URL} from "@/constants/api";
import type {ApplicationsFull} from "@/interfaces/applications";
import Swal from "sweetalert2";
import {useRouter} from "vue-router";

export async function getVolunteerApplications(): Promise<ApplicationsFull[]> {
    const response = await axiosInstance.get<ApplicationsFull[]>(`${API_URL}volunteers/applications`)

    return response.data
}

export async function getVolunteerApplicationsByProject(id: string): Promise<ApplicationsFull[] | undefined> {

    try {
        const response = await axiosInstance.get<ApplicationsFull[]>(`${API_URL}projects/${id}/applications`)

        return response.data
    }catch (e: any){

        return undefined
    }
}

export async function updateStatus(applicationId: string, status: string){
    await axiosInstance.patch(`${API_URL}projects/applications/${applicationId}`, {
        applicationStatus: status
    })


}