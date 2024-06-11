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
    company?: companyProps;
    applied?: boolean
    applicationCount?: number
}

export interface ProjectResponse {
    content: Project[];
    pageable: {
        sort: {
            sorted: boolean;
            unsorted: boolean;
            empty: boolean;
        };
        pageNumber: number;
        pageSize: number;
        offset: number;
        paged: boolean;
        unpaged: boolean;
    };
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    sort: {
        sorted: boolean;
        unsorted: boolean;
        empty: boolean;
    };
    numberOfElements: number;
    first: boolean;
    empty: boolean;
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
