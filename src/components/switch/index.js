import React, { useEffect, useState } from 'react'
import { useData } from '../../context/use-data'
import Style from './style.module.scss'
import Sun from "../../assets/Sun.svg"
import Crescent from "../../assets/Crescent.svg"
import { useAuth } from '../../context/use-auth'

const Switch = () => {

    const {setMode, mode} = useAuth()

    useEffect(() => {
        localStorage.setItem('mode', mode)
    }, [mode])
    return (
        <div className={Style.container + " " + mode } >
            {
                mode === "Light" ?   <img src={Crescent} onClick={() => setMode("Dark")} ></img> : <img src={Sun} onClick={() => setMode("Light")} ></img>
            }
        </div>
    )
}

export default Switch
