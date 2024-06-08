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
}