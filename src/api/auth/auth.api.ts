import { api } from "../api";


export interface RegisterInput {
    name: string;
    email: string;
    password: string;
}

export interface LoginInput {
    email: string;
    password: string;
}

export const registerApi = async (data: RegisterInput) => {
    try {
        const res = await api.post("/auth/register", data);
        return res.data
    } catch (error) {
        throw error;
    }
}


export const loginApi = async (data: LoginInput) => {
    try {
        const res = await api.post("/auth/login", data);
        return res.data
    } catch (error) {
        throw error;
    }
}