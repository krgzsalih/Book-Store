import React, { useState } from 'react'
import { useData } from '../../context/use-data'
import Style from './style.module.scss'
import Sun from "../../assets/Sun.svg"
import Crescent from "../../assets/Crescent.svg"

const Switch = () => {

    const {setMode, mode} = useData()
    const [checked, setChecked] = useState(false)

    const handleChange = () => {
        setChecked(!checked)
        checked === false ? setMode("Dark") : setMode("Light")
    }
    console.log(mode)
    return (
        <div className={Style.container + " " + mode } >
            {
                mode === "Light" ?   <img src={Crescent} onClick={handleChange} ></img> : <img src={Sun} onClick={handleChange} ></img>
            }
        </div>
    )
}

export default Switch
