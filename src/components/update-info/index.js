import React from "react";
import { useData } from "../../context/use-data";
import LeftArrow from "../icons/left-arrow";
import Style from "./style.module.scss";

const UpdateInfo = () => {
  const { bookInfo, setInfo } = useData();

  return (
    <div className={Style.container}>
      <div>
        <LeftArrow />
        <button className={Style.backBttn} onClick={() => setInfo(false)}>Back</button>
      </div>
      <div>
        <img src={bookInfo.thumbnail}></img>
      </div>
    </div>
  );
};

export default UpdateInfo;
