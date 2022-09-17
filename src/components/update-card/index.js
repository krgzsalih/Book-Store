import React, { useState } from "react";
import { useData } from "../../context/use-data";
import Button from "../button";
import MyModal from "../modal";
import Style from "./style.module.scss";

const UpdateCard = (props) => {
  //Changing books information
  const { item, bookId, updateInfoCount } = props;
  const [showModal, setshowModal] = useState(false)
  const {
    setBookInfo,
    setInfo,
    setUpdatedBookId,
    setbookParameters,
  } = useData();
  // When update button go to the update page and set the books infos
  const goToUpdatePage = () => {
    setInfo(true);
    setBookInfo(item);
    setUpdatedBookId(bookId);
    setbookParameters(updateInfoCount);
  };
  const closeModal = () => setshowModal(false);

  return (
    <div className={Style.container} >
      <img src={item.thumbnail} />
      <div className={Style.content}>
        <div className={Style.info}>
          <h3>{item.title}</h3>
          <h5>Author:<br></br><i>{item.author}</i></h5>
        </div>
        <div className={Style.buttons}>
          <Button title={"Update"} className={"updateButton"} click={goToUpdatePage} />
          <Button title={"Delete"} className={"deleteButton"} click={() => setshowModal(true)} />
        </div>
      </div>
      <MyModal visible={showModal} onClose={closeModal} bookId={bookId} />
    </div>
  );
};

export default UpdateCard;
