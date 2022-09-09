import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Header from '../components/header'
import { useData } from '../context/use-data'

const AuthLayout = () => {
    const {isLoggedIn} = useData()
    if (isLoggedIn === null) return <h2>Loading...</h2>
    else if (isLoggedIn === true) return <Navigate replace to="/admin" />;
    return (
        <>
            <Header />
            <Outlet />
        </>

    )
}

export default AuthLayout