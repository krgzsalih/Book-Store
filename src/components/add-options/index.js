import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../context/use-auth";
import { useData } from "../../context/use-data";
import Button from "../button";
import Input from "../input";
import Style from "./style.module.scss";

const AddOption = (props) => {
    const { item } = props;
    const [count, setCount] = useState();
    const [price, setPrice] = useState();
    const { token } = useAuth();

    const handleClick = async () => {
        if (count && price) {
            await axios.post("http://localhost:1337/api/books",
                {
                    data: {
                        bid: `${item.id}`,
                        title: `${item.volumeInfo.subtitle ? item.volumeInfo.subtitle : item.volumeInfo.title}`,
                        thumbnail: `${item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : "../../assets/not-cover.jpg"}`,
                        author: `${(item.volumeInfo.authors && item.volumeInfo.authors.map((author) => author)) || "None"}`,
                        publisher: `${item.volumeInfo.publisher || "None" || "none"}`,
                        pusblisDate: `${item.volumeInfo.publishedDate || "None" || "none"}`,
                        pageCount: `${item.volumeInfo.pageCount || "None" || "none"}`,
                        description: `${item.volumeInfo.description || "None"}`,
                        count: `${count}`,
                        price: `${price}`,
                    }
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                }
            )
                .then((response) => {
                    toast.success("Adding book is fulfilled")
                    //console.log(response)
                })
                .catch((errors) => {
                    //console.log(errors.response.status, " ERR");
                    errors.response.status == 400 && toast.error("This book already exists")
                });
        } else if (count == null || price == null) {
            toast.error("Invalid Count or Price");
        } else{
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
            <Button
                className="addButton"
                title="Add"
                click={handleClick}
            />
        </div>
    );
};

export default AddOption;
