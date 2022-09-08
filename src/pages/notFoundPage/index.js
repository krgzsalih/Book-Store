import React from 'react'

import Style from './style.module.scss'
import  logo  from '../../assets/logo.png'
const NotFoundPage  = () => {
  return (
    <div className={Style.Container}>
    <div className={Style.Logo}>
        <img src={logo} />
    </div>
    <div className={Style.text}>
        <b>404</b>
        <p> Not Found</p>
    </div>
    </div>
  )
}

export default NotFoundPage 