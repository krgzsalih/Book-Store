import { clear } from '@testing-library/user-event/dist/clear'
import React, { useEffect, useRef, useState } from 'react'
import { useAuth } from '../../context/use-auth'
import { useData } from '../../context/use-data'
import Style from './style.module.scss'



const Slider = () => {
    const divref = useRef()
    const [count, setCount] = useState(160)
    const { slideElement } = useData()
    const { mode } = useAuth() 



    
        setInterval(() => {
            let pixel = count
            divref.current.style.right = `${pixel}px`
            
            setCount(count + 160)
            if(count === 640){
                setCount(160)
            }
            
        }, 2000);
    
    
    
    return (
        <div className={Style.container + " " + mode}>
            <div className={Style.element}>
                <div ref={divref} className={Style.content}>
                {
                    slideElement && 
                    slideElement.map((item) => {
                        return <img src={item.attributes.thumbnail}></img>
                    } )
                }
                </div>
            </div>
        </div>
    )
}

export default Slider
