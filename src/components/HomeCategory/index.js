import React from 'react'
import Style from './style.module.scss'
import { useAuth } from '../../context/use-auth'


const Category = (props) => {
  const { mode } = useAuth()
  const { onClick } = props;
  return (
    <div className={Style.category + " " + mode}>
      <h4>Popular Categories</h4>
      <h5 onClick={onClick}>Action</h5>
      <h5 onClick={onClick}>Agriculture</h5>
      <h5 onClick={onClick}>Business</h5>
      <h5 onClick={onClick}>Education</h5>
      <h5 onClick={onClick}>Fiction</h5>
      <h5 onClick={onClick}>History</h5>
      <h5 onClick={onClick}>Science</h5>
    </div>
  )
}

export default Category
