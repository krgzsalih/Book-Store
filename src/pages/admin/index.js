import React, { useEffect, useState } from 'react'
import Input from '../../components/input'
import { useData } from '../../context/use-data'
import ApiList from '../../components/api-list'
import Admin from '../../assets/adminLog.png'
import Style from './style.module.scss'
import DBList from '../../components/db-list'
import Button from '../../components/button'
import Header from '../../components/header'
import { useAuth } from '../../context/use-auth'
import Option from '../../components/option'

const Crud = () => {

    const { setAdminSearch } = useData()
    const { logout, name, mode } = useAuth()
    const [search, setSearch] = useState()
    const [option, setOption] = useState("Add")
    const [visited, setVisited] = useState()

    const handleKey = (event) => {
        if (event.key === "Enter") {
            setAdminSearch(search)
        }
    }


    return (
        <>
            <Header />
            <div className={Style.container}>
                <div className={Style.process + " " + mode}>
                    <div className={Style.userLogInfo}>
                        <img src={Admin}></img>
                        <h3>{name}</h3>
                        <Button
                            className="logOut"
                            title="Logout"
                            click={logout}
                        />
                    </div>
                    <Option
                            onClick={setOption}
                            option={option}
                        />
                </div>
                <div className={Style.list + " " + mode}>
                    <div className={Style.search}>
                        <Input
                            type="text"
                            title="Search"
                            className="searchBar"
                            setValue={setSearch}
                            onKeyDown={handleKey}
                        >
                        </Input>
                    </div>
                    {
                        option === "Add" ?
                            <ApiList></ApiList> :
                            <DBList></DBList>
                    }
                </div>
            </div>
        </>
    )
}

export default Crud
