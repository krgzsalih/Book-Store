import React from 'react'
import Logo from '../../assets/logo.png'
import Style from './style.module.scss'
import { useData } from '../../context/use-data'
import Switch from '../switch'


const Header = () => {

    const { mode } = useData()

    return (
        <div className={Style.container + " " + mode}>
            <div className={Style.content}>
                <img className={Style.logo} src={Logo}></img>
                <h3>Book-Store</h3>
            </div>
            
            <div className={Style.switch}>
                <Switch />
            </div>
        </div>
    )
}

export default Header
