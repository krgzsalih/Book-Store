import React from 'react'
import { useAuth } from '../../context/use-auth'
import { useData } from '../../context/use-data'
import Style from './style.module.scss'
const HomeCard = (props) => {

    const { item } = props
    const { setCart, cart } = useData()

    const addChart = () => {
        setCart([...cart,{title: item.title,thumbnail: item.thumbnail,price: item.price}])
    }
    console.log(cart)

    return (
        <div className={Style.container}>
            <div className={Style.content}>
                <img src={item.thumbnail} />
                <h3 className={Style.title}>{item.title}</h3>
            </div>
            <h3 className={Style.price}>{item.price}$<span onClick={addChart}>Add to Cart</span></h3>
        </div>
    )
}

export default HomeCard
