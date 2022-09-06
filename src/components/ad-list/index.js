import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL, API_KEY } from '../../constant/'
import { useData } from '../../context/use-data'
import Style from './style.module.scss'

const AdList = () => {

    const { adminSearch } = useData()

    const [listItem, setListItem] = useState()

    useEffect(() => {
        const DataReq = () => {
            return new Promise(async (resolve, reject) => {
                const { data } = await axios(`${BASE_URL}${adminSearch}${API_KEY}`);
                resolve(data)
                reject(" ============================================= API ERROR")
            })
        };
        DataReq()
            .then((data) => setListItem(data.items))
            .catch((e) => console.log(e));
    }, [adminSearch])

    return (
        <div className={Style.container}>
            <div className={Style.bookList}>
                {
                    listItem ?
                        listItem.map((item) => {
                            return <div key={item.id}><img src={item.volumeInfo.imageLinks.smallThumbnail}></img></div>
                        }) : <div>No More Results</div>
                }
            </div>
        </div>
    )
}

export default AdList
