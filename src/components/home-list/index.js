import React, { useEffect } from 'react'
import { useData } from '../../context/use-data'
import { DataService } from '../../services/data'
import HomeCard from '../home-card'
import Input from '../input'
import Style from './style.module.scss'

const HomeList = () => {

    const { books, setBooks, mode } = useData()

    useEffect(() => {
        const Request = async () => {
            const response = await DataService()
            setBooks(response.data.data)
        }
        Request()
    }, [])

    return (
        <>
            <div className={Style.container + " " + mode}>
                <Input
                    type="text"
                    title="Search"
                    className="homeSearch"
                    content="home"
                    />
                    {
                        books ?
                            books.map((item) => {
                                return <HomeCard
                                    item={item.attributes}
                                    key={item.id}
                                />
                            }) : <div>No Result</div>
                    }
            </div>
            <div className={Style.category + " " + mode}>
                <h5>Category</h5>
                <ul>
                    <li>horror</li>
                    <li>horror</li>
                    <li>horror</li>
                </ul>
            </div>
        </>
    )
}

export default HomeList
