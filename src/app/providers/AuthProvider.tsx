import * as React from "react";
import { UserProviderProps } from "../@types/global";

export const defaultUserProviderProps: UserProviderProps = {
    id: 1,
    name: "Hilaire Sh",
    email: "email@example.com",
    userType: "admin"
    // userType: "participant"
};
export const UserProvider = React.createContext<UserProviderProps>(defaultUserProviderProps);

export const useAuth = (): UserProviderProps => {
    const context = React.useContext(UserProvider);
    if (!context) {
        throw new Error('useAuth must be used within a UserProvider');
    }
    return context;
}
