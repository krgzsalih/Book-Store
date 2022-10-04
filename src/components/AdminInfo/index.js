import React from 'react'
import AdminPng from '../../assets/adminLog.png'
import Button from '../../components/Button'
import Style from './style.module.scss'
import { useAuth } from '../../context/use-auth'
import { useNavigate } from 'react-router-dom'

const AdminInfo = () => {
    const navigate = useNavigate()
    const { logout, name, isAuth } = useAuth()

    return (
        <div className={Style.AdminLogInfo}>
            <img src={AdminPng} alt=""></img>
            <h3>{name}</h3>
            <Button
                className={isAuth === true ? "logOut" : "littlelogin"}
                title={isAuth === true ? "Logout" : "Login"}
                click={isAuth === true ? logout : () => navigate("/login")}
            />
        </div>
    )
}

export default AdminInfo
