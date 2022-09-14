import React from 'react'
import User from '../../assets/adminLog.png'
import { useAuth } from '../../context/use-auth'
import { useData } from '../../context/use-data'
import Button from '../button'
import Cart from '../cart'
import Style from './style.module.scss'
const UserInfo = () => {

    const { name, logout, mode } = useAuth()
    const { cart } = useData()

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
                <h4>Shopping Cart<span>{cart.length}</span></h4>
                <div className={Style.list} >
                    {
                        cart ?
                            cart.map((item, index) => {
                                return <Cart
                                    key={index}
                                    id={index}
                                    title={item.title}
                                    thumbnail={item.thumbnail}
                                    price={item.price}
                                />
                            }) : <h5>Not yet added</h5>
                    }
                    
                </div>
            </div>
            <Button
                title="BUY"
                className = "payment"
            />
        </div>
    )
}

export default UserInfo
