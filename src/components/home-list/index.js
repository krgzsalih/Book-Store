import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/use-auth";
import { useData } from "../../context/use-data";
import { DataService, SearchService } from "../../services/data";
import BackButton from "../back-button";
import HomeCard from "../home-card";
import Category from "../home-category";
import Input from "../input";
import MainPageBookInfo from "../mainPageBookInfo";
import Style from "./style.module.scss";

const HomeList = () => {
  const { mode } = useAuth();
  const { books, setBooks, mainPageBookInfo, setmainPageBookInfo, mainPageBookInfoDetails, setmainPageBookInfoDetails } = useData();
  const [search, setSearch] = useState();
  const [back, setBack] = useState();

  const handleKey = (event) => {
    if (event.key === "Enter") {
      const Searching = async () => {
        const response = await SearchService(search, "title");
        setBooks(response.data.data);
        setBack(true);
      };
      Searching();
    }
  };
  const backClick = () => {
    setBack(false);
    const Request = async () => {
      const response = await DataService();
      setBooks(response.data.data);
    };
    Request();
    setmainPageBookInfo(false);
  };

  const categoryHandleClick = (e) => {
    const Searching = async () => {
      const response = await SearchService(e.target.innerHTML, "category");
      setBooks(response.data.data);
      setBack(true);
    };
    Searching();
  };


  useEffect(() => {
    const Request = async () => {
      const response = await DataService();
      setBooks(response.data.data);
    };
    Request();
  }, []);

  

  return (
    <>
      <div className={Style.container + " " + mode}>
        <Input
          type="text"
          title="Search"
          className="homeSearch"
          content="home"
          setValue={setSearch}
          onKeyDown={handleKey}
        />
        <div className={Style.list}>
        {back === true && (
          <BackButton spanClickInfo={backClick} />
        )}
        {mainPageBookInfo ? (
          <MainPageBookInfo  bookItems={mainPageBookInfoDetails} />
        ) : books ? (
          books.map((item) => {
            return <HomeCard setBack={setBack} spanClickInfo={backClick} item={item.attributes} key={item.id} />;
          })
        ) : (
          <div>No Result</div>
        )}
        </div>
      </div>
      <Category onClick={categoryHandleClick} />
    </>
  );
};

export default HomeList;
