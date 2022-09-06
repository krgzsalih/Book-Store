import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useIsLoggedIn } from '../hooks/useCurrentUser'

const AuthLayout = () => {
    const  isLoggedIn  = useIsLoggedIn()
    if (isLoggedIn === null) return <h2>Loading...</h2>
    else if (isLoggedIn === true) return <Navigate replace to="/" />;
    return (
        <Outlet />
    )
}

export default AuthLayout