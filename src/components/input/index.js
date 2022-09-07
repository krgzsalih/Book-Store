import React from 'react'
import { useData } from '../../context/use-data'
import Style from './style.module.scss'

const Input = (props) => {
    const { mode } = useData()

    return (
        <div className={Style.container + " " + Style[props.content]}>
            <input
                ref={props.useRef}
                className={Style[props.name] + " " + mode}
                value={props.value}
                type={props.type}
                onChange={e => props.setValue(e.target.value)}
                placeholder={props.title}
                onKeyDown= {props.onKeyDown}
            />
        </div>
    )
}

export default Input
