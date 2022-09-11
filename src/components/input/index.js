import React from 'react'
import { useData } from '../../context/use-data'
import Style from './style.module.scss'

const Input = (props) => {
    const { mode } = useData()

    return (
        <div className={Style.container + " " + Style[props.content]}>
            <input
                className={Style[props.className] + " " + mode}
                value={props.value}
                type={props.type}
                onChange={(e) => props.setValue(e.target.value)}
                placeholder={props.title}
                onKeyDown= {props.onKeyDown}
                min={props.min}
            />
            {
                <span className={Style.error}>{props.error && props.error}</span>
            }
        </div>
    )
}

export default Input
