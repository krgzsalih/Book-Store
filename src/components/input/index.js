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
                onChange={props.setValue}
                placeholder={props.title}
                onKeyDown= {props.onKeyDown}
                min={props.min}
            />
            {
                props.error &&
                <span>{props.error}</span>
            }
        </div>
    )
}

export default Input
