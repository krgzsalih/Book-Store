import React from 'react'
import Style from './style.module.scss'
import { useData } from '../../context/use-data'
import { useAuth } from '../../context/use-auth'


const Category = () => {

    const {mode} = useAuth()

    return (
        <div className={Style.category + " " + mode}>
            <h4>Popular Categories</h4>
            <h5>Fantastic</h5>
            <h5>Horror</h5>
            <h5>Psychology</h5>
            <h5>History</h5>
        </div>
    )
}

export default Category
