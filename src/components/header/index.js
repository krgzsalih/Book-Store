import React from 'react'
import Logo from '../../assets/logo.png'
import Style from './style.module.scss'
import { useData } from '../../context/use-data'
import Switch from '../switch'
import Button from '../button'
import { useNavigate } from "react-router-dom";


const Header = () => {
    const navigate = useNavigate()
    const { mode } = useData()

    return (
        <div className={Style.container + " " + mode}>
            <div className={Style.content}>
                <img className={Style.logo} src={Logo} alt="logo" />
                <h3>Book-Store</h3>
            </div>
            <div className={Style.switch}>
                <a onClick={() => navigate("/", { replace: false })}>
                    home
                </a>
                <Switch />
            </div>
        </div>
    )
}

export default Header
