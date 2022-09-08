import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { addBook } from '../../constants/firebase'
import Button from '../button'
import Input from '../input'
import Style from './style.module.scss'

const AddOption = (props) => {

    const { item } = props
    const [count, setCount] = useState()
    const [price, setPrice] = useState()

    const handleClick =  async() => {

        if(count && price){
            await addBook({
                    title: item.volumeInfo.subtitle ? item.volumeInfo.subtitle : item.volumeInfo.title,
                thumbnail: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : "../../assets/not-cover.jpg" ,
                author: item.volumeInfo.authors && item.volumeInfo.authors.map((author) => author) || "None",
                publisher: item.volumeInfo.publisher || "None"  || "none",
                pusblisDate: item.volumeInfo.publishedDate || "None" || "none",
                pageCount: item.volumeInfo.pageCount || "None" || "none",
                count: count,
                price: price
            }, item.id, item.id )
            
        }
        else{
            toast.error("Invalid Count or Price")
        }
    }

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
