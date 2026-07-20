import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <div>
            <div>
                <h1>This is for NavBar</h1>
            </div>
            <Outlet />
        </div>
    )
}

export default MainLayout
