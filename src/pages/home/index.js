//Hooks
import React, { useEffect } from 'react'
//Style
import Style from './style.module.scss'
//Components
import Header from '../../components/Header'
import HomeList from '../../components/HomeList'
import UserInfo from '../../components/UserInfo'
//Auth
import { useAuth } from '../../context/use-auth'


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