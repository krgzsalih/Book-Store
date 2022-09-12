import React from 'react'
import Style from './style.module.scss'

const UpdateCard = (props) => {

    const { item } = props

    return (
        <div className={Style.container}>
            <img src={item.thumbnail}/>
            <h3> {item.title}</h3>
        </div>
    )
}

export default UpdateCard
