import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface AuthUser {
    id: string;
    name: string;
    email: string;
    role: "user" | "admin";
}

interface AuthState {
    user: AuthUser | null;
    accessToken: string | null;

    setAuth: (token: string, user: AuthUser) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            accessToken: null,

            setAuth: (token, user) => {
                set({
                    accessToken: token,
                    user,
                });
            },

            logout: () => {
                set({
                    accessToken: null,
                    user: null,
                });
            },
        }),
        {
            name: "auth-storage",
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({
                user: state.user,
                accessToken: state.accessToken,
            }),
        }
    )
);
