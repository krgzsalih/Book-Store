import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/use-auth";
import { useData } from "../../context/use-data";
import { DataService, SearchService } from "../../services/data";
import BackButton from "../BackButton";
import HomeCard from "../HomeCard";
import Category from "../HomeCategory";
import Input from "../Input";
import MainPageBookInfo from "../HomeBookInfo";
import Slider from "../Slide";
import Style from "./style.module.scss";

const HomeList = () => {

  const { mode } = useAuth();
  const {
    books,
    setBooks,
    mainPageBookInfo,
    setmainPageBookInfo,
    mainPageBookInfoDetails,
    setSlideElement,
  } = useData();
  const [search, setSearch] = useState();
  const [back, setBack] = useState();

// If admin defined search bar values get the book after enter key
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
// If click any book view info after back button
  const backClick = () => {
    setBack(false);
    const Request = async () => {
      const response = await DataService();
      setBooks(response.data.data);
    };
    Request();
    setmainPageBookInfo(false);
  };

  // Set category when click category related section
  const categoryHandleClick = (e) => {
    const Searching = async () => {
      const response = await SearchService(e.target.innerHTML, "category");
      setBooks(response.data.data);
      setBack(true);
    };
    Searching();
  };

  // Open first time home page listing Database book list
  useEffect(() => {
    const Request = async () => {
      const response = await DataService();
      setBooks(response.data.data);
      setSlideElement(
        response.data.data.slice(Math.max(response.data.data.length - 5, 1))
      );
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
              {back === true && <BackButton spanClickInfo={backClick} />}
              {mainPageBookInfo ? (
                <MainPageBookInfo bookItems={mainPageBookInfoDetails} />
              ) : books ? (
                books.map((item) => {
                  return (
                    <HomeCard
                      setBack={setBack}
                      spanClickInfo={backClick}
                      item={item.attributes}
                      key={item.id}
                    />
                  );
                })
              ) : (
                <div>No Result</div>
              )}
            </div>
      </div>
      <div className={Style.rightSide}>
        <Category onClick={categoryHandleClick} />
        <Slider />
      </div>
    </>
  );
};

export default HomeList;
