import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL, API_KEY } from '../../constants/axios'
import { useData } from '../../context/use-data'
import Style from './style.module.scss'
import notCover from '../../assets/not-cover.jpg'

const AdList = () => {

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
        }
        console.log(listItem)
    }, [adminSearch])

    return (
        <div className={Style.container}>
            <div className={Style.bookList}>
                {
                    listItem ?
                        listItem.map((item) => {
                            return <div key={item.id} className={Style.items}>
                                <img
                                    src={
                                        item.volumeInfo.imageLinks
                                            ? item.volumeInfo.imageLinks.thumbnail
                                            : notCover}>
                                </img>
                                <div className={Style.info}>
                                    <h4>{item.volumeInfo.subtitle ? item.volumeInfo.subtitle : item.volumeInfo.title}</h4>
                                    <h5>Author : <i>{ item.volumeInfo.authors && item.volumeInfo.authors.map((author) => author)}</i> </h5>
                                    {item.volumeInfo.publisher && <h5><b>Publisher:</b> {item.volumeInfo.publisher}</h5>}
                                    <h5><b>Published Date : </b>{item.volumeInfo.publishedDate}</h5>
                                    <h5><b> Page Count :</b> {item.volumeInfo.pageCount}</h5>
                                </div>
                            </div>
                        })
                        : <div>No More Results</div>
                }
            </div>
        </div>
    )
}

export default AdList
