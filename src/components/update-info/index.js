import React from 'react'
import { useData } from '../../context/use-data'

const UpdateInfo = () => {

    const { bookInfo, setInfo } = useData()


    return (
        <div>
            <img src={bookInfo.thumbnail}></img>
            <button onClick={() => setInfo(false)}>Back</button>
        </div>
    )
}

export default UpdateInfo
