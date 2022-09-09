import React, { useState } from 'react'
import Input from '../../../components/input'
import { useData } from '../../../context/use-data'
import ApiList from '../../../components/api-list'

import Style from './style.module.scss'
import DBList from '../../../components/db-list'
import Button from '../../../components/button'


const Crud = () => {

    const { mode, setAdminSearch, setLoggedIn, name } = useData()
    const [search, setSearch] = useState()
    
    const setAuth = () => {
        setLoggedIn(false)
    }
    const handleKey = (event) => {
        if(event.key === "Enter"){
            setAdminSearch(search)
        }
    }

    return (
        <div className={Style.container}>
            <div className={Style.process + " " + mode}>
                <h3>{name}<span><Button
                    title="Logout"
                    click={setAuth}
                >
                </Button></span></h3>
                <h4>Add</h4>
                <h4>Update</h4>
                
            </div>
            <div className={Style.list + " " + mode}>
                <div className={Style.search}>
                    <Input
                        title="Search"
                        name = "searchBar"
                        setValue = {setSearch}
                        onKeyDown = {handleKey}
                    >
                    </Input>
                </div>
                <ApiList></ApiList>
            </div>
        </div>
    )
}

export default Crud
