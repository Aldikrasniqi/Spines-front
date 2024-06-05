import {defineStore} from "pinia";
import type {ProjectCreateProps} from "@/interfaces/Project";
import {addProject} from "@/services/projectService";

export const useProject = defineStore("project", {
     state: () => ({
         projectCreateProps: {
                name: "",
                type: "",
                requirements: "",
                information: "",
                skillsIds: []
         } as ProjectCreateProps
     }),
     actions: {
        async createProject(){
            await addProject(this.projectCreateProps)
            this.projectCreateProps = {
                name: "",
                type: "",
                requirements: "",
                information: "",
                skillsIds: []
            }
        }
     }
})