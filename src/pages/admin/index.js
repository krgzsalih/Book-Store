import React, { useEffect, useState } from 'react'
import Input from '../../components/input'
import { useData } from '../../context/use-data'
import ApiList from '../../components/api-list'
import Admin from '../../assets/adminLog.png'
import Style from './style.module.scss'
import DBList from '../../components/book-list'
import Button from '../../components/button'
import Header from '../../components/header'
import { useAuth } from '../../context/use-auth'
import Option from '../../components/option'
import { useNavigate } from 'react-router-dom'
import { SearchService } from '../../services/data'

const Crud = () => {

    const navigate = useNavigate()
    const { setAdminSearch, setBooks } = useData()
    const { logout, name, mode, isAuth } = useAuth()
    const [search, setSearch] = useState()
    const [option, setOption] = useState("Add")

    const handleKey = (event) => {
        if (event.key === "Enter") {
            setAdminSearch(search)
            const Searching = async () => {
                const response = await SearchService(search, "title");
                setBooks(response.data.data);
            };
            Searching();
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
                            className={isAuth === true ? "logOut" : "littlelogin"}
                            title={isAuth === true ? "Logout" : "Login"}
                            click={isAuth === true ? logout : () => navigate("/login")}
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
                            <ApiList /> :
                            <DBList />
                    }
                </div>
            </div>
        </>
    )
}

export default Crud
