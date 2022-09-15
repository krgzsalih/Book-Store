import React from "react";
import Style from "./style.module.scss";

const BackButton = (props) => {
  return (
    <div className={Style.container}>
      <span className={Style.back} onClick={props.spanClickInfo}>
        Back
      </span>
    </div>
  );
};

export default BackButton;
