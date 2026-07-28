'use client';
import React, { useEffect } from 'react'
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import Loader from '@/common/Loader';

const ProtectedRoute = ({children}) => {
    const {user, loading} = useAuth();
    const router = useRouter();
    if(loading){
        return <Loader />
    }

    useEffect(() => {
        if(!user){
            router.replace('/login');
        }
    }, [user, loading, router]);

    if(!user) return null;
        
    return {children}
}

export default ProtectedRoute
