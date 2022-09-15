import React, { useEffect, useState } from "react";
import { useData } from "../../context/use-data";
import Style from "./style.module.scss";

const Cart = (props) => {
  const { title, thumbnail, price, id } = props;
  const { cart, setCart, totalPrice, setTotalPrice } = useData();

  const deleteCart = () => {
    cart.splice(id, 1);
    const num = totalPrice - price;
    const fixed = num.toFixed(2);
    setTotalPrice(fixed)
    setCart([...cart]);
  };

  useEffect(() => {
    sum()
    // console.log(totalPrice, " CART_TOP");
  }, [totalPrice]);

  const sum = () => {
    let allSum = 0; 
    const arr = []
    const toplam =  cart.map((item)=> arr.push(item.price));
    arr.forEach(item => allSum += item);
    const fixed = allSum.toFixed(2);
    setTotalPrice(fixed)
    // console.log(arr, totalPrice, " CART_TOP");
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
