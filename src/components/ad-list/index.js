import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {BASE_URL, API_KEY} from '../../constant/'


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
    <div>
      <ul>
      {
        listItem.map((item) => {
            
          return  <li key={item.id}><img src={item.volumeInfo.imageLinks.thumbnail}></img></li>
        }
        )
      }
      </ul>
    </div>
  )
}

export default AdList
