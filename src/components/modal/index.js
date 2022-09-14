import axios from "axios";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../context/use-auth";
import { useData } from "../../context/use-data";
import { DataService, DeleteService } from "../../services/data";
import Style from "./style.module.scss";

const MyModal = ({ visible, onClose, bookId }) => {

  const { token } = useAuth();
  const { updateComp, setUpdateComp} = useData()

  const handleClose = () => {
    onClose();
  };

  const handleDelete = async () => {
    await DeleteService(bookId, token).then(() => setUpdateComp(!updateComp))
    onClose();
  };

  if (!visible) return null;
  return (
    <div className={Style.container} onClick={handleClose}>
      <div className={Style.box}>
        <p>Are you sure about delete this book ?</p>
        <div>
          <button onClick={onClose}>No</button>
          <button onClick={handleDelete}>Yes</button>
        </div>
      </div>
    </div>
  );
};

export default MyModal;
