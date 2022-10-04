//Style
import Style from './style.module.scss'

//Hooks, Services
import React, { useState } from 'react'
import { useData } from '../../context/use-data'
import { useAuth } from '../../context/use-auth'
import { SearchService } from '../../services/data'
//Components
import Input from '../../components/Input'
import AddList from '../../components/AddList'
import UpdateList from '../../components/UpdateList'
import Header from '../../components/Header'
import CrudOption from '../../components/CrudOption'
import AdminInfo from '../../components/AdminInfo'


const Admin = () => {

  const { setAdminSearch, setBooks } = useData()
  const { mode } = useAuth()
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
          <AdminInfo/>
          <CrudOption
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
              <AddList /> :
              <UpdateList />
          }
        </div>
      </div>
    </>
  )
}

export default Admin
