import React from 'react'
import { useData } from '../../context/use-data'
import Style from './style.module.scss'

const UpdateCard = (props) => {

    const { item, bookId, updateInfoCount } = props
    const { setBookInfo, setInfo, setUpdatedBookId, bookParameters, setbookParameters } = useData()

    const handleClick = () => {
        setInfo(true)
        setBookInfo(item)
        setUpdatedBookId(bookId)
        setbookParameters(updateInfoCount)
        console.log(updateInfoCount, " UPDATE_INFO_COUNT")
        // console.log(bookId, " UPDATE_CARD")
    }

    return (
        <div className={Style.container} onClick={handleClick}>
            <img src={item.thumbnail} />
            <h3> {item.title}</h3>
        </div>
    )
}

export default UpdateCard
