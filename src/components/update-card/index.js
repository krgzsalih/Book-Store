import React from 'react'
import { useData } from '../../context/use-data'
import Style from './style.module.scss'

const UpdateCard = (props) => {

    const { item } = props
    const { setBookInfo, setInfo } = useData()

    const handleClick = () => {
        setInfo(true)
        setBookInfo(item)
    }

    return (
        <div className={Style.container} onClick={handleClick}>
            <img src={item.thumbnail} />
            <h3> {item.title}</h3>
        </div>
    )
}

export default UpdateCard
