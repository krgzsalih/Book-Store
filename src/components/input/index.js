import React from 'react'
import { useData } from '../../context/use-data'
import Style from './style.module.scss'

const Input = (props) => {

    const {mode} = useData()

    return (
        <div className={Style.container}>
            <input
                className={mode}
                value={props.value}
                type={props.type}
                onChange={e => props.setValue(e.target.value)}
                placeholder= {props.title}
            />
        </div>
    )
}

export default Input
