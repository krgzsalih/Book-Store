import React, { useEffect } from 'react'
import { useAuth } from '../../context/use-auth'
import { useData } from '../../context/use-data'
import { DataService } from '../../services/data'
import HomeCard from '../home-card'
import Category from '../home-category'
import Input from '../input'
import Style from './style.module.scss'

const HomeList = () => {

    const {mode} = useAuth()
    const { books, setBooks } = useData()

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
            <Category/>
        </>
    )
}

export default HomeList
