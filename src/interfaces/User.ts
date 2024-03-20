export interface User {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    avatar: string;
    role: string;
    token: string;
    createdAt: string;
    updatedAt: string;
}

export interface LoginCredentials {
    email: string;
    password: string;
}