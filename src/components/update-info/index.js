import React from "react";
import { useData } from "../../context/use-data";
import Style from "./style.module.scss";
import MyForm from "../form";
import { useAuth } from "../../context/use-auth";

const UpdateInfo = () => {
  const { bookInfo, setInfo } = useData();
  const {mode} = useAuth()

  return (
    <div className={Style.container + " " + mode}>
      <div>
        <button className={Style.backBttn} onClick={() => setInfo(false)}>
          Back
        </button>
      </div>
      <div className={Style.bookInfo}>
        <div>
          <img src={bookInfo.thumbnail} alt=""></img>
        </div>
        <div>
            <MyForm />
        </div>
      </div>
    </div>
  );
};

export default UpdateInfo;
