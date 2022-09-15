import React from 'react'
import { useData } from '../../context/use-data'
import Style from './style.module.scss'
const HomeCard = (props) => {

    const { item, setBack } = props
    const { setCart, cart, setmainPageBookInfo, setmainPageBookInfoDetails } = useData()

    const addChart = () => {
        setCart([...cart,{title: item.title,thumbnail: item.thumbnail,price: item.price}])
    }
    //console.log(cart)
    const handleCardClick = () => {
        setmainPageBookInfo(true);
        setmainPageBookInfoDetails(item);
        setBack(() => true)
    }

    return (
        <div className={Style.container}>
            <div className={Style.content} onClick={handleCardClick}>
                <img src={item.thumbnail} />
                <h3 className={Style.title}>{item.title}</h3>
            </div>
            <h3 className={Style.price}>{item.price}$<span onClick={addChart}>Add to Cart</span></h3>
        </div>
    )
}

export default HomeCard
