import React from 'react'
import Style from './style.module.scss'
const HomeCard = (props) => {

    const { item } = props

    return (
        <div className={Style.container}>
            <div className={Style.content}>
                <img src={item.thumbnail} />
                <h3 className={Style.title}> {item.title}</h3>
            </div>
            <h3 className={Style.price}>{item.price}$<span>Add to Card</span></h3>
        </div>
    )
}

export default HomeCard
