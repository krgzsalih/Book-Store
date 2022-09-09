import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useData } from "../../context/use-data";
import Button from "../button";
import Input from "../input";
import Style from "./style.module.scss";

const AddOption = (props) => {
  const { item } = props;
  const { tokenInfo } = useData();
  const [count, setCount] = useState();
  const [price, setPrice] = useState();
  const [already, setAlready] = useState(null);

  const handleClick = async () => {
    const {data} = await axios.get("http://localhost:1337/api/books");
    console.log(data);
    const isAlready = data.data.some(items => items.attributes.bid === item.id );
    setAlready(isAlready);
    console.log(isAlready, " already");
 
    if (already == false && count && price) {
        await axios.post("http://localhost:1337/api/books",
          {
            data: {
              bid: `${item.id}`,  
              title: `${item.volumeInfo.subtitle ? item.volumeInfo.subtitle : item.volumeInfo.title }`,
              thumbnail: `${item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : "../../assets/not-cover.jpg" }`,
              author: `${(item.volumeInfo.authors && item.volumeInfo.authors.map((author) => author)) || "None" }`,
              publisher: `${item.volumeInfo.publisher || "None" || "none"}`,
              pusblisDate: `${item.volumeInfo.publishedDate || "None" || "none"}`,
              pageCount: `${item.volumeInfo.pageCount || "None" || "none"}`,
              count: `${count}`,
              price: `${price}`,
            }
          },
          {
            headers: {
              Authorization: `Bearer ${tokenInfo}`,
            }
          }
        )
        .then((response) =>{
            toast.success("Adding book is fulfilled")
            //console.log(response)
        })
        .catch((errors) => {
          toast.error(errors);
        });
    } else {
      toast.error("Invalid Count or Price");
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
      <Button title="Add" click={handleClick} />
    </div>
  );
};

export default AddOption;
