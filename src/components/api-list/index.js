import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL, API_KEY } from '../../constants/axios'
import { useData } from '../../context/use-data'
import Style from './style.module.scss'
import BookCard from '../book-card'

const ApiList = () => {
   
    const { adminSearch } = useData()
    const [listItem, setListItem] = useState()

    useEffect(() => {
        if (adminSearch !== "") {
            const DataReq = () => {
                return new Promise(async (resolve, reject) => {
                    const { data } = await axios(`${BASE_URL}${adminSearch}${API_KEY}`);
                    resolve(data)
                    reject("API ERROR")
                });

            };
            DataReq()
                .then((data) => setListItem(data.items))
                .catch((e) => console.log(e));

                console.log(listItem)
        }
        
    }, [adminSearch])

    return (
        <div className={Style.container}>
            <div className={Style.bookList}>
                {
                    listItem ?
                        listItem.map((item) => {
                            return <BookCard
                                item={item}
                                key={item.id}
                            />
                        })
                        : <div>No Result!.. Please Enter a Book Title or Author</div> 
                }
            </div>
        </div>
    )
}

export default ApiList
