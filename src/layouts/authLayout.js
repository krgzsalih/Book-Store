import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useIsLoggedIn } from '../hooks/useCurrentUser'
import Header from '../components/header'

const AuthLayout = () => {
    const isLoggedIn = useIsLoggedIn()
    if (isLoggedIn === null) return <h2>Loading...</h2>
    else if (isLoggedIn === true) return <Navigate replace to="/admin-crud" />;
    return (
        <>
            <Header />
            <Outlet />
        </>

    )
}

export default AuthLayout