import React, { useEffect, useState } from 'react'
import { useData } from '../../context/use-data'
import Style from './style.module.scss'
import Sun from "../../assets/Sun.svg"
import Crescent from "../../assets/Crescent.svg"
import { useAuth } from '../../context/use-auth'

const Switch = () => {

    const {setMode, mode} = useAuth()
    const [checked, setChecked] = useState(false)
    localStorage.setItem('mode', mode)
    
    const handleClick = () => {
        setChecked(!checked)
        checked === false ? setMode("Dark") : setMode("Light")
    }  
    
    return (
        <div className={Style.container + " " + mode } >
            {
                mode === "Light" ?   <img src={Crescent} onClick={handleClick} ></img> : <img src={Sun} onClick={handleClick} ></img>
            }
        </div>
    )
}

export default Switch
