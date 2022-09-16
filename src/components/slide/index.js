import React from 'react'
import { useAuth } from '../../context/use-auth'
import { useData } from '../../context/use-data'
import Style from './style.module.scss'



const Slider = () => {
    const { slideElement } = useData()
    const { mode } = useAuth()

    //console.log(slideElement && slideElement[0].attributes.thumbnail)
    return (
        <div className={Style.container + " " + mode}>
            <h5>Recently Added</h5>
            <div className={Style.element}>
                
                <div className={Style.content}>
                    {
                        slideElement && slideElement.map((item) => {
                            return <div>
                                        <img src={item.attributes.thumbnail}></img>
                                        <h5>{item.attributes.title}</h5>
                                    </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Slider
