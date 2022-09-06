import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL, API_KEY } from '../../constant/'
import Style from './style.module.scss'

const AdList = () => {

    const [listItem, setListItem] = useState()

    const DataReq = () => {

        return new Promise(async (resolve, reject) => {
            const { data } = await axios(`${BASE_URL}${API_KEY}`);
            resolve(data)
            reject(console.error())
        })
    };




    useEffect(() => {
        DataReq()
            .then((data) => setListItem(data.items))
            .catch((e) => console.log(e));
    }, [])


    return (
        <div className={Style.container}>
            <div className={Style.bookList}>
                {
                    listItem &&
                    listItem.map((item) => {
                        return <div key={item.id}><img src={item.volumeInfo.imageLinks.smallThumbnail}></img></div>
                    })
                }
            </div>
        </div>
    )
}

export default AdList
