import React, { useEffect, useState } from "react";
import { useData } from "../../context/use-data";
import Style from "./style.module.scss";

let total = 0;
const Cart = (props) => {
  const { title, thumbnail, price, id } = props;
  const { cart, setCart, totalPrice, setTotalPrice } = useData();
  const [arr, setarr] = useState([])

  const deleteCart = () => {
    cart.splice(id, 1);
    setCart([...cart]);
  };
  useEffect(() => {
    //sum()
  }, []);

  const sum = () => {
    total += price;
    setTotalPrice([...totalPrice, price])
    setarr([...arr ,price])
    console.log(arr, " total");
  }
  
  return (
    <div className={Style.container}>
      <img src={thumbnail}></img>
      <div className={Style.content}>
        <h5>{title}</h5>
        <span className={Style.price}>{price}$</span>
        <span className={Style.delete} onClick={deleteCart}>
          Delete
        </span>
      </div>
    </div>
  );
};

export default Cart;
