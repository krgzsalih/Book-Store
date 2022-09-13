
import React, { useEffect } from 'react'
import { useData } from '../../context/use-data'
import { DataService } from '../../services/data'
import UpdateCard from '../update-card'
import UpdateInfo from '../update-info'
import Style from './style.module.scss'



const DBList = () => {

    const { info , books, setBooks } = useData()
    
    useEffect(() => {
        const Request = async ()  => {
            const response = await DataService()
            setBooks(response.data.data)
        }   
        Request()
    }, [])

    return (
        <div className={Style.container}>
            <div className={Style.bookList}>
                {
                    info === true ?
                        <UpdateInfo />
                        :
                        books ?
                            books.map((item) => {
                                return <UpdateCard
                                    item={item.attributes}
                                    key={item.id}
                                    bookId={item.id}
                                />
                            }) : <div>No Result</div>
                }
            </div>
        </div>
    )
}

export default DBList
