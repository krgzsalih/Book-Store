import React from 'react'
import User from '../../assets/adminLog.png'
import { useAuth } from '../../context/use-auth'
import { useData } from '../../context/use-data'
import Button from '../button'
import Style from './style.module.scss'
const UserInfo = () => {

    const { name, logout, mode } = useAuth()

    return (
        <div className={Style.user + " " + mode}>
            <div className={Style.userInfo}>
                <img src={User}></img>
                <h3>{name}</h3>
                <Button
                    className="logOut"
                    title="Logout"
                    click={logout}
                />
            </div>
            <div className={Style.shopping}>
                <h4>Shopping Cart<span></span></h4>
                <div className={Style.list} >
                    <h5>Not yet added</h5>
                </div>
            </div>
        </div>
    )
}

export default UserInfo
