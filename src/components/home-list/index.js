import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/use-auth'
import { useData } from '../../context/use-data'
import { DataService, SearchService } from '../../services/data'
import HomeCard from '../home-card'
import Category from '../home-category'
import Input from '../input'
import Style from './style.module.scss'

const HomeList = () => {

    const { mode } = useAuth()
    const { books, setBooks } = useData()
    const [search, setSearch] = useState()


    
    const handleKey = (event) => {
        if (event.key === "Enter") {
            const Searching = async () => {
                const response = await SearchService(search)
                setBooks(response.data.data)
            }
            Searching()
        }
    }

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
                    setValue={setSearch}
                    onKeyDown={handleKey}
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
            <Category />
        </>
    )
}

export default HomeList
