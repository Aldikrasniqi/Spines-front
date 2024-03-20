import type { LoginCredentials } from "@/interfaces/User";
import axiosInstance from "@/plugins/axios";
export async function login(payload: LoginCredentials) {
    console.log(payload);
}