//Style
import Style from './style.module.scss'
import AdminPng from '../../assets/adminLog.png'
//Hooks, Services
import React, { useState } from 'react'
import { useData } from '../../context/use-data'
import { useAuth } from '../../context/use-auth'
import { useNavigate } from 'react-router-dom'
import { SearchService } from '../../services/data'
//Components
import Input from '../../components/Input'
import AddList from '../../components/AddList'
import UpdateList from '../../components/UpdateList'
import Button from '../../components/Button'
import Header from '../../components/Header'
import Option from '../../components/Visited'


const Admin = () => {

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
            <img src={AdminPng} alt=""></img>
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
              <AddList /> :
              <UpdateList />
          }
        </div>
      </div>
    </>
  )
}

export default Admin
