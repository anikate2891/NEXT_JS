import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AuthLayout from '../layouts/authLayout'
import Login from '../pages/Login'
import Register from '../pages/Register'
import MainLayout from '../layouts/mainLayout'
import Home from '../pages/Home'
import Public from './protected/Public'
import Protected from './protected/Protected'
import { useEffect } from 'react'
import {axiosInstance} from '../config/axios.jsx'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../state/AuthReducer'

const AppRoutes = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            try{
                const res = await axiosInstance.get("/api/auth/me");
                console.log("User data retrieved successfully:", res.data);
                dispatch(addUser(res?.data?.user));
            }catch(error){
                dispatch(removeUser());
                console.error("Error in AppRoutes useEffect:", error);
            }
        })()
    }, [])

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Public />,
            children: [
                {
                    path: '',
                    element: <AuthLayout />,
            children: [
                {
                    path: "",
                    element: <Login />
                },
                {
                    path: "/register",
                    element: <Register />
                }
            ]
                }
            ]
        },  
        {
            path: "/home",
            element: <Protected />,
            children: [
                {
                    path: "",
                    element: <MainLayout />,
                    children: [
                        {
                            path: "",
                            element: <Home />
                        }
                    ]
                }
            ]
        }
    ])

    return <RouterProvider router={router} />
}

export default AppRoutes    
