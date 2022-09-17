import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { BaseURLDB, clientURL } from "../../constants/axios";
import { useAuth } from "../../context/use-auth";
import Button from "../button";
import Input from "../input";
import Style from "./style.module.scss";

const AddOption = (props) => {
  const { item } = props; 
  const [count, setCount] = useState(); //  Defining the pieces of book
  const [price, setPrice] = useState(); //  Defining the price of book
  const { token } = useAuth();  // if User Auth get the token

  const handleClick = async () => {
    // If count and price defined add the book to the database
    if (count && price) {
      await axios
        .post(
          `${BaseURLDB}${clientURL.books}`, 
          {
            data: {
              bid: `${item.id}`,
              title: `${
                item.volumeInfo.subtitle
                  ? item.volumeInfo.subtitle
                  : item.volumeInfo.title
              }`,
              thumbnail: `${
                item.volumeInfo.imageLinks
                  ? item.volumeInfo.imageLinks.thumbnail
                  : "../../assets/not-cover.jpg"
              }`,
              author: `${
                (item.volumeInfo.authors &&
                  item.volumeInfo.authors.map((author) => author)) ||
                "None"
              }`,
              publisher: `${item.volumeInfo.publisher || "None" || "none"}`,
              pusblisDate: `${
                item.volumeInfo.publishedDate || "None" || "none"
              }`,
              pageCount: `${item.volumeInfo.pageCount || "None" || "none"}`,
              description: `${item.volumeInfo.description || "None"}`,
              count: `${count}`,
              price: `${price}`,
              category: `${
                item.volumeInfo.categories
                  ? item.volumeInfo.categories.map((x) => x)
                  : "None"
              }`,
            },
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          toast.success("Adding book is fulfilled");
        })
        .catch((errors) => {
          errors.response.status === 400 &&
            toast.error("This book already exists");
        });
    } else if (count == null || price == null) {
      toast.error("Invalid Count or Price");
    } else {
      toast.error("Undefined error!");
    }
  };

  return (
    <div className={Style.manage}>
      <div className={Style.subManage}>
        <span>Count</span>
        <Input min={0} type="number" content="count" setValue={setCount} />
      </div>
      <div className={Style.subManage}>
        <span>Price</span>
        <Input min={0} type="number" content="count" setValue={setPrice} />
      </div>
      <Button className="addButton" title="Add" click={handleClick} />
    </div>
  );
};

export default AddOption;
