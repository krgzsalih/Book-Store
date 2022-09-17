import React from 'react'
import { useAuth } from '../../context/use-auth'
import Style from './style.module.scss'


const Payment = (props) => {
  // If click buy button after up on the page card info inputs.
  const { mode } = useAuth()
  const { visible, onClose } = props

  if (!visible) return null;
  return (
    <>
      <div className={Style.container}>
        <div className={Style.box + " " + mode}>
          <h1>Payment</h1>
          <div className={Style.info}>
            <input className={mode} placeholder="Card Number"></input>
            <input className={mode} placeholder="Card Owner Name"></input>
          </div>
          <div className={Style.validInfo}>
            <input className={mode} placeholder="Valid Thru"></input>
            <input className={mode} placeholder="CVC2"></input>
          </div>
          <div className={Style.buttons}>
            <button className={Style.confirm} onClick={onClose}>Confirm</button>
            <button className={Style.cancel} onClick={onClose}>Cancel</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Payment
