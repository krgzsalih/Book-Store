import React from 'react'
import Logo from '../../assets/logo.png'
import Style from './style.module.scss'
import Switch from '../switch'
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../context/use-auth'


const Header = () => {
    const navigate = useNavigate()
    const { mode } = useAuth()

    return (
        <div className={Style.container + " " + mode}>
            <div className={Style.content}>
                <img className={Style.logo} src={Logo} alt="logo" />
                <h3>Book-Store</h3>
            </div>
            <div className={Style.switch}>
                <h4 onClick={() => navigate("/", { replace: false })}>
                    Home
                </h4>
                <Switch />
            </div>
        </div>
    )
}

export default Header
