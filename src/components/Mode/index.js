import React, { useEffect } from 'react'
import Style from './style.module.scss'
import Sun from "../../assets/Sun.svg"
import Crescent from "../../assets/Crescent.svg"
import { useAuth } from '../../context/use-auth'

const Mode = () => {
  // Click set dark or light mode
  const { setMode, mode } = useAuth()
  useEffect(() => {
    localStorage.setItem('mode', mode)
  }, [mode])
  return (
    <div className={Style.container + " " + mode} >
      {
        mode === "Light" ? <img src={Crescent} onClick={() => setMode("Dark")} alt="" ></img> : <img src={Sun} onClick={() => setMode("Light")} alt="" ></img>
      }
    </div>
  )
}

export default Mode
