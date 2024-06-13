import {defineStore} from "pinia";
import {
    getVolunteerApplications,
    getVolunteerApplicationsByProject,
    updateStatus
} from "@/services/applicationsService";
import type {ApplicationsFull} from "@/interfaces/applications";
import {useAuthStore} from "@/stores/useAuth";
import {useRoute, useRouter} from "vue-router";
import router from "@/router";
import Swal from "sweetalert2";

export const useApplications = defineStore('applications', {
    state() {
        return {
        volunteerApplications: [] as ApplicationsFull[] | undefined,
        }
    },
    actions: {
        async fetchApplications() {

            if(useAuthStore().isUser) {
                this.volunteerApplications = await getVolunteerApplications();
            }

            if(!useAuthStore().isUser){

                const projectId = router.currentRoute.value.params.id;
                this.volunteerApplications = await getVolunteerApplicationsByProject(projectId.toString());


            }
        },
        async updateStatus(applicationId: string, status: string){
            await updateStatus(applicationId, status)

            await Swal.fire({
                icon: 'success',
                text: `Application status updated to ${status} successfully!`,

            })

            await this.fetchApplications();
        }
    }
})