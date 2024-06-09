import type {Skills} from "@/interfaces/Skills";
import type {Skill} from "@/components/ProjectsCard.vue";

export interface Project {
    id?: string;
    name: string;
    type: string;
    requirements: string;
    information: string;
    skills?: Skill[];
    skillsIds: string[];
    content?: string;
    company?: companyProps;
}

export interface companyProps{
    address: string;
    companyName: string;
    email: string;
    helpDescription: string;
    organizationType: string;
    phoneNumber: string;
    webPageUrl: string;
}
