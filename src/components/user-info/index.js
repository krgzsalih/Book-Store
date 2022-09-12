import React from 'react'
import User from '../../assets/adminLog.png'
import { useAuth } from '../../context/use-auth'
import { useData } from '../../context/use-data'
import Style from './style.module.scss'
const UserInfo = () => {

    const { name } = useAuth()
    const { mode } = useData()

    return (
        <div className={Style.userInfo + " " + mode}>
            <div>
                <img src={User}></img>
                <h3>{name}</h3>
            </div>
            <div>
                <h4>Shopping Cart<span></span></h4>
            </div>
        </div>
    )
}

export default UserInfo
