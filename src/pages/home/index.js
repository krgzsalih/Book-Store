import React from 'react'
import Header from '../../components/header'
import { useUserAuth } from '../../context/use-user-auth'

const Home = () => {

  return (
    <>
      <Header />
      <h2>Hi, Home!</h2>
    </>
  )
}

export default Home