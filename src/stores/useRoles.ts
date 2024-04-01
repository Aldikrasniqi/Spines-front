import type { PremessionsInterface, RolesInterface } from "@/interfaces/roles";
import { defineStore } from "pinia";
import { Roles } from "@/interfaces/roles";
import axiosInstance from "@/plugins/axios";

export const useRoleStore = defineStore("roles", {
    state: () => ({
        roles: [] as RolesInterface[],
        premessions: [] as PremessionsInterface[],
    })
})