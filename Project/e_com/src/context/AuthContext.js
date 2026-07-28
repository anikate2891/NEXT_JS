'use client';
import {createContext, useState} from 'react';
import {api} from '@/lib/api';
import { useEffect, useContext } from 'react';


const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const hydrateUser = async () => {
        try {
            const res = await api.get('/api/auth/me')
            setUser(res.data.user);
        } catch (error) {
            setUser(null);
            console.error('Error hydrating user:', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        hydrateUser();
    }, []);

    return (
        <AuthContext.Provider value={{user, setUser, loading}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    return context;
}