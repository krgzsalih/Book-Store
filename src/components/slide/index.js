import React from 'react'
import { useAuth } from '../../context/use-auth'
import { useData } from '../../context/use-data'
import Style from './style.module.scss'



const Slider = () => {
  // It shows five books in added recently part
  const { slideElement } = useData()
  const { mode } = useAuth()

  return (
    <div className={Style.container + " " + mode}>
      <h4>Recently Added</h4>
      <div className={Style.element}>
        <div className={Style.content}>
          {
            slideElement && slideElement.map((item, index) => {
              return <div key={index} >
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
