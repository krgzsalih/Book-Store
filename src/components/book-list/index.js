import React, { useEffect } from "react";
import { useData } from "../../context/use-data";
import { DataService } from "../../services/data";
import UpdateCard from "../update-card";
import UpdateInfo from "../update-info";
import Style from "./style.module.scss";

const DBList = () => {
  const { info, books, setBooks, updateComp } = useData();

  // Fetching books from our database to listing, update and delete operations

  useEffect(() => {
    const Request = async () => {
      const response = await DataService();
      setBooks(response.data.data);
    };
    Request();
  }, [updateComp]);

  return (
    <div className={Style.container}>
      <div className={Style.bookList}>
        {info === true ? (
          <UpdateInfo />
        ) : books ? (
          books.map((item) => {
            return (
              <UpdateCard
                item={item.attributes}
                key={item.id}
                bookId={item.id}
                updateInfoCount={{
                  count: item.attributes.count,
                  price: item.attributes.price,
                  description: item.attributes.description,
                }}
              />
            );
          })
        ) : (
          <div>No Result</div>
        )}
      </div>
    </div>
  );
};

export default DBList;
