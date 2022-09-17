import React from 'react'
import { useData } from '../../context/use-data'
import Style from './style.module.scss'
const HomeCard = (props) => {
    // Listing home card
    const { item, setBack } = props
    const { setCart, cart, setmainPageBookInfo, setmainPageBookInfoDetails } = useData()
    const addCart = () => {
        setCart([...cart,{title: item.title,thumbnail: item.thumbnail,price: item.price}])
    }
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
            <h3 className={Style.price}>{item.price}$<span onClick={addCart}>Add to Cart</span></h3>
        </div>
    )
}

export default HomeCard
