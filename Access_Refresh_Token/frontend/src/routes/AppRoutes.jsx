import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AuthLayout from '../layouts/authLayout'
import Login from '../pages/Login'
import Register from '../pages/Register'
import MainLayout from '../layouts/mainLayout'
import Home from '../pages/Home'




const AppRoutes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
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
        },  
        {
            path: "/home",
            element:<MainLayout />,
            children: [
                {
                    path: "",
                    element: <Home />
                }
            ]
        }
    ])

    return <RouterProvider router={router} />
}

export default AppRoutes    
