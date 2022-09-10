import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import Button from '../button'
import Input from '../input'
import Style from './style.module.scss'

const AddOption = (props) => {

    const { item } = props
    const [count, setCount] = useState()
    const [price, setPrice] = useState()

    const handleClick = async () => {

        if (count && price) {
            await axios.post("http://localhost:1337/api/books",
                {
                    
                }
            )
        }
        else {
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
