import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL, API_KEY } from "../../constants/axios";
import { useData } from "../../context/use-data";
import Style from "./style.module.scss";
import AddCard from "../add-card";

const ApiList = () => {
  const { adminSearch } = useData(); // Get the search bar value
  const [listItem, setListItem] = useState(); 

  useEffect(() => {
    // If admin defined search bar values get the book after enter key
    if (adminSearch !== "") {
      const DataReq = () => {
        return new Promise(async (resolve, reject) => {
          const { data } = await axios(
            `${BASE_URL}${adminSearch}&maxResults=40${API_KEY}`
          );
          resolve(data);
          console.log(data, " DATAm");
          reject("API ERROR");
        });
      };
      DataReq()
        .then((data) => setListItem(data.items))
        .catch((e) => console.log(e));
    }
  }, [adminSearch]);

  return (
    <div className={Style.container}>
      <div className={Style.bookList}>
        {listItem ? (
          listItem.map((item) => {
            return <AddCard item={item} key={item.id} />;
          })
        ) : (
          <div>No Result!.. Please Enter a Book Title or Author</div>
        )}
      </div>
    </div>
  );
};

export default ApiList;
