import React, { useEffect } from 'react'
import { useData } from '../../context/use-data'
import Style from './style.module.scss'



const DBList = () => {
    const { books } = useData()

    return (
        <div className={Style.container}>
            <div className={Style.bookList}>
                <ul>
                    {
                        books.map(item =>
                            <li>{item.id}----------{item.title}</li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default DBList
