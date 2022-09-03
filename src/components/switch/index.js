import React, { useState } from 'react'
import { useData } from '../../context/use-data'
import Style from './style.module.scss'
const Switch = () => {

    const {setMode, mode} = useData()
    const [checked, setChecked] = useState(false)

    const handleChange = () => {
        checked === false ? setMode("Dark") : setMode("Light")
        setChecked(!checked)
    }
    console.log(mode)
    return (
        <div className={Style.container + " " + mode } >
            <label className={Style.switch_label} htmlFor='Switch'>Dark Mode</label>
            <input
                className={Style.switch}
                name='Switch'
                type="checkbox"
                checked={checked}
                onChange={() => handleChange()}
            ></input>
        </div>
    )
}

export default Switch
