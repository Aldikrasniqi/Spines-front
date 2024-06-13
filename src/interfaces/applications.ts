export interface Applications {
    id: string;
    projectId: string;
}

export interface ApplicationsFull {
    id: string
    companyName?: string
    projectName: string
    status: string
    applicationDate: string
    volunteer?: {
        id: string
        firstName: string
        lastName: string
    }
}

export interface ApplicationUpdate{
    status: string
}