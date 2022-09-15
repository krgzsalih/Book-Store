import React, { useEffect } from "react";
import { useData } from "../../context/use-data";
import BackButton from "../back-button";
import Style from "./style.module.scss";

const MainPageBookInfo = () => {
  const { mainPageBookInfoDetails, setCart, cart } = useData();

  useEffect(() => {
    console.log(mainPageBookInfoDetails, " GELDİ");
  }, []);
  const addChart = () => {
    setCart([
      ...cart,
      {
        title: mainPageBookInfoDetails.title,
        thumbnail: mainPageBookInfoDetails.thumbnail,
        price: mainPageBookInfoDetails.price,
      },
    ]);
  };
  return (
    <div className={Style.container}>
      <div className={Style.content}>
        <div className={Style.imgWrapper}>
          <img src={mainPageBookInfoDetails.thumbnail}></img>
          <div>
            <h3 className={Style.price}>
              Price : {mainPageBookInfoDetails.price}$
              <span onClick={addChart}>Add to Cart</span>
            </h3>
          </div>
        </div>
        <div className={Style.details}>
          <div className={Style.detailsScroll}>
            <h2>{mainPageBookInfoDetails.title}</h2>
            <h3>
              <i>{mainPageBookInfoDetails.author}</i>
            </h3>
            <p>{mainPageBookInfoDetails.description}</p>
            <div className={Style.aboutBook}>
              <div className={Style.aboutBookOne}>
                <h4>
                  Book details about <a>{mainPageBookInfoDetails.title}</a>
                </h4>
              </div>
              <div className={Style.aboutBookTwo}>
                <span>Page Count : {mainPageBookInfoDetails.pageCount}</span>
                <span>Category : {mainPageBookInfoDetails.category}</span>
                <span>Publisher : {mainPageBookInfoDetails.publisher}</span>
                <span>
                  {mainPageBookInfoDetails.count ? (
                    <a>In Stock</a>
                  ) : (
                    <a>Out of Stock</a>
                  )}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MainPageBookInfo;
