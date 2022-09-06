import React from 'react'
import { useData } from '../../context/use-data'
import Button from '../button'
import Style from './style.module.scss'
import Input from '../../components/input'
import AdList from '../ad-list'

const Crud = () => {

    const { mode } = useData()

    return (
        <div className={Style.container}>
            <div className={Style.buttons + " " + mode}>
                <Button
                    title="Add"
                />
                <Button
                    title="Delete"
                />
                <Button
                    title="Update"
                />
            </div>
            <div className={Style.list + " " + mode}>
                <div className={Style.search}>
                    <Input
                        title="Search"
                    >
                    </Input>
                </div>
                <AdList></AdList>
            </div>
        </div>
    )
}

export default Crud
