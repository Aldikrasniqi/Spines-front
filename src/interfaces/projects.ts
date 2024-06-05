enum ProjectType {
    SCRUM,
    KANBAN,
    WATERFALL,
    LEAN,
    XP,
}


export interface Project {
    name: string;
    type: ProjectType;
    requirements: string;
    informations: string;
    skillsId: string[];
}