export enum Roles {
    SuperAdmin = 'SUPER_ADMIN',
    Admin = 'ADMIN',
    User = 'USER',   
}

export interface PremessionsInterface {
    id: number;
    name: string;
} 

export interface RolesInterface {
    id: number;
    name: string;
    premisions: PremessionsInterface[];
}   