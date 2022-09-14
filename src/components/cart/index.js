import React from 'react'
import { useData } from '../../context/use-data'
import Button from '../button'
import Style from './style.module.scss'


const Cart = (props) => {

    const { title, thumbnail, price, id } = props
    const { cart, setCart } = useData()

    const deleteCart = () => {
        cart.splice(id, 1)
        setCart([...cart])
    }

    return (
        <div className={Style.container}>
            <img src={thumbnail}></img>
            <div className={Style.content}>
                <h5>{title}</h5>
                <span className={Style.price}>{price}$</span>
                <span className={Style.delete} onClick={deleteCart}>Delete</span>
            </div>
        </div>
    )
}

export default Cart
