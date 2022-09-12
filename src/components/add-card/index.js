import React, { useEffect } from 'react'
import notCover from '../../assets/not-cover.jpg'
import AddOption from '../add-options'
import Style from './style.module.scss'

const AddCard = (props) => {

    const { item } = props


    return (
        <div className={Style.items} >
            <img src={ 
                item.volumeInfo.imageLinks
                ? item.volumeInfo.imageLinks.thumbnail
                : notCover} alt="img"/>
            <div className={Style.info}>
                <h4>{item.volumeInfo.subtitle ? item.volumeInfo.subtitle : item.volumeInfo.title}</h4>
                <h5>Author : <i>{item.volumeInfo.authors && item.volumeInfo.authors.map((author) => author)}</i> </h5>
                {item.volumeInfo.publisher && <h5><b>Publisher:</b><i> {item.volumeInfo.publisher}</i></h5>}
                <h5><b>Published Date : </b><i>{item.volumeInfo.publishedDate}</i></h5>
                <h5><b> Page Count :</b> <i>{item.volumeInfo.pageCount}</i></h5>
            </div>
            <AddOption
                item={item}
            ></AddOption>
        </div>
    )
}

export default AddCard
