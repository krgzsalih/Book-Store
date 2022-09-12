import React from 'react'
import Style from './style.module.scss'

const Button = (props) => {

    const { type, click, className, title } = props

    return (
        <div className={Style.container}>
            <button
                type={type}
                onClick={click}
                className={Style[className]}
            >{title}</button>
        </div>
    )
}

export default Button
