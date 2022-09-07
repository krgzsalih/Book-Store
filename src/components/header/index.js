import React from 'react'
import Logo from '../../assets/logo.png'
import Style from './style.module.scss'
import { useData } from '../../context/use-data'
import Switch from '../switch'
import Button from '../button'
import { useUserAuth } from '../../context/use-user-auth'
import { useIsLoggedIn } from '../../hooks/useCurrentUser'


const Header = () => {

    const { mode } = useData()
    const { signOut } = useUserAuth()
    const isLoggedIn = useIsLoggedIn()

    const handleSignOut = () => {
        signOut()
    }
    return (
        <div className={Style.container + " " + mode}>
            <div className={Style.content}>
                <img className={Style.logo} src={Logo}></img>
                <h3>Book-Store</h3>
            </div>
            <div className={Style.switch}>
                <Switch />
                {
                    isLoggedIn && <Button click={handleSignOut} title="Çıkış" />
                }
            </div>
        </div>
    )
}

export default Header
