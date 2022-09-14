import React, { useEffect } from 'react'
import Style from './style.module.scss'
const Option = (props) => {

    const {onClick, option} = props

    return (
        <>
            <h4 className={Style.option + " " + Style[option === "Add" ? "Add" : "noVisited"]} onClick={() => onClick("Add")}>Add</h4>
            <h4 className={Style.option + " " + Style[option === "Update" ? "Update" : "noVisited"]} onClick={() => onClick("Update")}>Update</h4>
        </>
    )
}

export default Option
