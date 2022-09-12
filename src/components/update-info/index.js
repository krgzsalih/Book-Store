import React from "react";
import { useData } from "../../context/use-data";
import Style from "./style.module.scss";

import * as svgs from "../../assets/svg";
import MyForm from "../form";

const UpdateInfo = () => {
  const { bookInfo, setInfo } = useData();

  return (
    <div className={Style.container}>
      <div>
        <button className={Style.backBttn} onClick={() => setInfo(false)}>
          Back
        </button>
      </div>
      <div className={Style.bookInfo}>
        <div>
          <img src={bookInfo.thumbnail}></img>
        </div>
        <div>
            <MyForm />
        </div>
      </div>
    </div>
  );
};

export default UpdateInfo;
