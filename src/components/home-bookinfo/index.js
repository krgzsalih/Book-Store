import React from "react";
import { useData } from "../../context/use-data";
import Style from "./style.module.scss";

const MainPageBookInfo = () => {

  const { mainPageBookInfoDetails, setCart, cart } = useData();

  const addCart = () => {
    //If click the add cart button set in shopping cart
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
          <img src={mainPageBookInfoDetails.thumbnail} alt=""></img>
          <div>
            <h3 className={Style.price}>
              Price : {mainPageBookInfoDetails.price}$
              <span onClick={addCart}>Add to Cart</span>
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
                  Book details about <strong>{mainPageBookInfoDetails.title}</strong>
                </h4>
              </div>
              <div className={Style.aboutBookTwo}>
                <span>Page Count : {mainPageBookInfoDetails.pageCount}</span>
                <span>Category : {mainPageBookInfoDetails.category}</span>
                <span>Publisher : {mainPageBookInfoDetails.publisher}</span>
                <span>
                  {mainPageBookInfoDetails.count ? (
                    <p>In Stock</p>
                  ) : (
                    <p>Out of Stock</p>
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
