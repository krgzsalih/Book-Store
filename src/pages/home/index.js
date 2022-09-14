import React, { useEffect } from 'react'
import Header from '../../components/header'
import HomeList from '../../components/home-list'
import UserInfo from '../../components/user-info'
import { useAuth } from '../../context/use-auth'
import Style from './style.module.scss'

const Home = () => {
  
  const {setMode} = useAuth()


  useEffect(() => {
    const LastMode = localStorage.getItem('mode');
    setMode(LastMode)
  }, [])
  

  return (
    <>
      <Header />
      <div className={Style.container}>
        <UserInfo/>
        <HomeList/>
      </div>
    </>
  )
}

export default Home