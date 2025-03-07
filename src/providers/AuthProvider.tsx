"use client";

import * as React from "react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { joinProgram } from "@/apis";
import { AuthContextType, UserProfile } from "@/@types/global";
import { useRouter, usePathname } from "next/navigation";

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

const AUTH_STORAGE_KEY = "token";

export const AuthContext = React.createContext<AuthContextType>({
    data: defaultUser,
    isAuthenticated: false,
    isLoading: true,
    authenticate: async () => {},
    logout: () => {},
});

export const useAuth = () => React.useContext(AuthContext);

export const Providers = ({ children }: { children: React.ReactNode }) => {
    const [queryClient] = React.useState(() => new QueryClient());
    const [user, setUser] = React.useState<UserProfile>(defaultUser);
    const [isLoading, setIsLoading] = React.useState(true);
    const router = useRouter();
    const pathname = usePathname();
    const isAuthenticated = !!user.token && !!user.user._id;

    // Check for existing user in localStorage on initial load
    React.useEffect(() => {
        const loadStoredUser = () => {
            try {
                const storedUser = localStorage.getItem(AUTH_STORAGE_KEY);
                if (storedUser) {
                    const parsedUser = JSON.parse(storedUser);
                    setUser(parsedUser);
                }
            } catch (error) {
                console.error("Failed to load user from storage:", error);
                localStorage.removeItem(AUTH_STORAGE_KEY);
            } finally {
                setIsLoading(false);
            }
        };

        loadStoredUser();
    }, []);

    // Auto-authenticate based on URL path
    React.useEffect(() => {
        const autoAuthenticate = async () => {
            if (isAuthenticated || isLoading) return;
            
            let role: "admin" | "participant" | null = null;

            console.log("pathname", pathname)
            
            if (pathname?.startsWith("/admin/dashboard")) {
                role = "admin";
            } else if (pathname?.startsWith("/dashboard")) {
                role = "participant";
            }
            
            if (role) {
                setIsLoading(true);
                try {
                    // Hardcoded credentials based on role
                    const payload = role === "admin" 
                        ? { userRole: "admin" } 
                        : { userRole: "participant" };
                    
                    const response = await joinProgram(payload);
                    
                    if (response.data && response.data.token) {
                        const newUserData = {
                            user: response.data.user,
                            token: response.data.token
                        };
                        
                        setUser(newUserData);
                        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(newUserData));
                    }
                } catch (error) {
                    console.error("Auto-authentication error:", error);
                    // Redirect to home page on auth failure
                    router.push("/");
                } finally {
                    setIsLoading(false);
                }
            }
        };

        autoAuthenticate();
    }, [pathname, isLoading]);

    // Regular authentication function
    const authenticate = async (payload: Record<string, string>) => {
        setIsLoading(true);
        try {
            const response = await joinProgram(payload);
            
            if (response.data && response.data.token) {
                const newUserData = {
                    user: response.data.user,
                    token: response.data.token
                };
                
                setUser(newUserData);
                localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(newUserData));
            }
        } catch (error) {
            console.error("Authentication error:", error);
            throw new Error(
                error instanceof Error ? error.message : "An unknown error occurred"
            );
        } finally {
            setIsLoading(false);
        }
    };
    const logout = () => {
        try {
            localStorage.clear();
            setUser(defaultUser);
            router.push("/");
        } catch (error) {
            console.error("Error during logout:", error);
            // Ensure user state is reset even if localStorage fails
            setUser(defaultUser);
            router.push("/");
        }
    };

    return (
        <QueryClientProvider client={queryClient}>
            <AuthContext.Provider 
                value={{ 
                    data: user, 
                    isAuthenticated, 
                    isLoading, 
                    authenticate,
                    logout 
                }}
            >
                {children}
            </AuthContext.Provider>
        </QueryClientProvider>
    );
};