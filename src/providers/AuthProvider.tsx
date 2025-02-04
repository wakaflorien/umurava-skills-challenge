"use client";

import * as React from "react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { joinProgram } from "@/apis";
import { AuthContextType, UserProfile } from "@/@types/global";
import { useRouter } from "next/navigation";

const defaultUser: UserProfile = {
    user: {
        _id: "",
        username: "",
        names: "",
        email: "",
        userRole: "",
        profile_url: "",
        phoneNumber: ""
    },
    token: ""
};

export const AuthContext = React.createContext<AuthContextType>({
    data: defaultUser,
    authenticate: async () => { },
    logout: () => { },
});

export const useAuth = () => React.useContext(AuthContext);

export const Providers = ({ children }: { children: React.ReactNode }) => {
    const [queryClient] = React.useState(() => new QueryClient());
    const router = useRouter();

    const [user, setUser] = React.useState<UserProfile>(defaultUser);

    const authenticate = async (payload: Record<string, string>) => {
        try {
            const response = await joinProgram(payload);

            if (response.data.token) {
                setUser({
                    user: response.data.user,
                    token: response.data.token
                });
            }
        } catch (error) {
            throw new Error(
                error instanceof Error ? error.message : "An unknown error occurred"
            );
        }
    };

    const logout = () => {
        setUser(defaultUser);
        router.replace("/");
    };

    return (
        <QueryClientProvider client={queryClient}>
            <AuthContext.Provider value={{ data: user, authenticate, logout }}>
                {children}
            </AuthContext.Provider>
        </QueryClientProvider>
    )
}