import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useIsLoggedIn } from '../hooks/useCurrentUser';
import Header from '../components/header'
import { useData } from '../context/use-data';

const Layout = () => {
  const {isLoggedIn} = useData()

  if (isLoggedIn === null) return <h2>Loading...</h2>
  else if (isLoggedIn === false) return <Navigate replace to="/admin-login" />;
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default Layout