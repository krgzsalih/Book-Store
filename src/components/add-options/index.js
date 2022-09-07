import React, { useState } from 'react'
import { useData } from '../../context/use-data'
import Button from '../button'
import Input from '../input'
import Style from './style.module.scss'

const AddOption = (props) => {

    const { item } = props

    const { currentBook, setCurrentBook } = useData()
    const [count, setCount] = useState()
    const [price, setPrice] = useState()

    const handleClick = () => {

        setCurrentBook({
            id: item.id,
            title: item.volumeInfo.subtitle ? item.volumeInfo.subtitle : item.volumeInfo.title,
            thumbnail: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : "../../assets/not-cover.jpg" ,
            author: item.volumeInfo.authors && item.volumeInfo.authors.map((author) => author),
            publisher: item.volumeInfo.publisher,
            pusblisDate: item.volumeInfo.publishedDate,
            pageCount: item.volumeInfo.pageCount,
            count: count,
            price: price,
        })

    }
    console.log("muko", currentBook)
    return (
        <div className={Style.manage}>
            <div className={Style.subManage}>
                <span>Count</span>
                <Input 
                min={0} 
                type="number" 
                content="count" 
                setValue={setCount} />
            </div>
            <div className={Style.subManage}>
                <span>Price</span>
                <Input 
                min={0} 
                type="number" 
                content="count" 
                setValue={setPrice} />
            </div>
            <Button title="Add" click={handleClick} />
        </div>
    )
}

export default AddOption
