import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {BASE_URL, API_KEY} from '../../constant/'
import Style from './style.module.scss'

const AdList = () => {

    const [listItem,setListItem] = useState()

    const request = async () => {
        
        const result = await axios(`${BASE_URL}${API_KEY}`)
        setListItem(result.data.items)
        return console.log(result.data.items)
    }

    useEffect(() => {
        request()
    }, [])
    

  return (
    <div className={Style.container}>
      <div className={Style.bookList}>
      {
        listItem.map((item) => {
          return  <div key={item.id}><img src={item.volumeInfo.imageLinks.thumbnail}></img></div>
        }
        )
      }
      </div>
    </div>
  )
}

export default AdList
