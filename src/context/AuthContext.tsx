
'use client'
import { IUserSession } from '@/types';
import { createContext, useContext, useState, useEffect } from 'react';

export interface AuthContextProps {
    userData: { user: IUserSession } | null;
    token: string | null;
    setUserData: (userData: IUserSession | null, token: string | null) => void;
}

export const AuthContext = createContext<AuthContextProps>({
    userData: null,
    token: null,
    setUserData: () => {}
});

export interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [userData, setUserDataState] = useState<{ user: IUserSession } | null>(null);
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const storedSession = JSON.parse(localStorage.getItem("userSession") || "null");
        if (storedSession) {
            setUserDataState({ user: storedSession.user }); // 🔹 Estructura con `user`
            setToken(storedSession.token);
        }
    }, []);

    const setUserData = (userData: IUserSession | null, token: string | null) => {
        if (userData && token) {
            setUserDataState({ user: userData }); // 🔹 Mantener `{ user: data }`
            setToken(token);
            localStorage.setItem("userSession", JSON.stringify({ token, user: userData }));
        } else {
            setUserDataState(null);
            setToken(null);
            localStorage.removeItem("userSession");
        }
    };

    return (
        <AuthContext.Provider value={{ userData, token, setUserData }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);



