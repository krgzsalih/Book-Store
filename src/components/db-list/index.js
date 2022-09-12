import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BaseURLDB, clientURL } from '../../constants/axios'
import { useData } from '../../context/use-data'
import UpdateCard from '../update-card'
import UpdateInfo from '../update-info'
import Style from './style.module.scss'



const DBList = () => {

    const { adminSearch, info } = useData()
    const [listItem, setListItem] = useState()

    useEffect(() => {
        const MyDataReq = async () => {
            return new Promise(async (resolve, reject) => {
                const { data } = await axios.get(`${BaseURLDB}${clientURL.books}`);
                resolve(data)
                reject("API ERROR")
                console.log(data.data)
            })
                .then((data) => setListItem(data.data))
                .catch((e) => console.log(e));
        }
        MyDataReq()

    }, [])


    return (
        <div className={Style.container}>
            <div className={Style.bookList}>
                {
                    info === true ?
                        <UpdateInfo />
                        :
                        listItem ?
                            listItem.map((item) => {
                                return <UpdateCard
                                    item={item.attributes}
                                    key={item.id}
                                />
                            }) : <div>No Result</div>
                }
            </div>
        </div>
    )
}

export default DBList
