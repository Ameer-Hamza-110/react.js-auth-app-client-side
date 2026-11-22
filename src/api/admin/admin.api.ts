import { api } from "../api"




export const getUsersApi = async () => {
    try {
        const user = await api.get("/user")
        return user.data
    } catch (error) {
        throw error;
    }
}