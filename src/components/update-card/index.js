import React, { useState } from "react";
import { useData } from "../../context/use-data";
import Button from "../button";
import MyModal from "../modal";
import Style from "./style.module.scss";

const UpdateCard = (props) => {
  const { item, bookId, updateInfoCount } = props;
  const [showModal, setshowModal] = useState(false)
  const {
    setBookInfo,
    setInfo,
    setUpdatedBookId,
    setbookParameters,
  } = useData();

  const goToUpdatePage = () => {
    setInfo(true);
    setBookInfo(item);
    setUpdatedBookId(bookId);
    setbookParameters(updateInfoCount);
    //console.log(updateInfoCount, " UPDATE_INFO_COUNT");
    // console.log(bookId, " UPDATE_CARD")
  };
  const closeModal = () => setshowModal(false);

  return (
    <div className={Style.container} >
      <img src={item.thumbnail} />
      <h3> {item.title}</h3>
      <div className={Style.buttons}>
        <Button title={"Update"} className={"updateButton"} click={goToUpdatePage}/>
        <Button title={"Delete"} className={"deleteButton"} click={()=> setshowModal(true)}/>
      </div>
      <MyModal visible={showModal} onClose={closeModal} bookId={bookId}/>
    </div>
  );
};

export default UpdateCard;
