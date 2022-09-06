import React, { useState } from 'react'
import { useData } from '../../context/use-data'
import Button from '../button'
import Style from './style.module.scss'
import Input from '../../components/input'
import AdList from '../ad-list'

const Crud = () => {

    const { mode, setAdminSearch } = useData()
    const [search, setSearch] = useState()
    
    const handleKey = (event) => {
        if(event.key === "Enter"){
            setAdminSearch(search)
        }
    }

    return (
        <div className={Style.container}>
            <div className={Style.process + " " + mode}>
                <h3>Admin Name</h3>
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
                <AdList></AdList>
            </div>
        </div>
    )
}

export default Crud
