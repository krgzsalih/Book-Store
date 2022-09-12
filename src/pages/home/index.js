import React from 'react'
import Header from '../../components/header'
import HomeList from '../../components/home-list'
import UserInfo from '../../components/user-info'
import Style from './style.module.scss'

const Home = () => {

  
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