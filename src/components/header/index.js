import React from 'react'
import Logo from '../../assets/logo.png'
import Style from './style.module.scss'
import Switch from '../switch'
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../../context/use-auth'


const Header = () => {
    const { mode } = useAuth()

    return (
        <div className={Style.container + " " + mode}>
            <div className={Style.navbar}>
                <div className={Style.content}>
                    <img className={Style.logo} src={Logo} alt="logo" />
                    <h3>Book-Store</h3>
                </div>
                <div className={Style.switch}>
                    <Link to="/">
                        Home
                    </Link >
                    <Link to="/login" >
                        Login
                    </Link >
                    <Link to="/register" >
                        Register
                    </Link >
                    <Link to="/aboutus" >
                        About Us
                    </Link >
                    <Switch />
                </div>
            </div>
        </div>
    )
}

export default Header
