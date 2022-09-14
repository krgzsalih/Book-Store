import axios from "axios";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../context/use-auth";
import { useData } from "../../context/use-data";
import Style from "./style.module.scss";

const MyModal = ({ visible, onClose, bookId }) => {
  const { token } = useAuth();
  const { books, setBooks } = useData();

  const handleClose = () => {
    onClose();
  };

  const handleDelete = async () => {
    await axios
      .delete(
        `http://localhost:1337/api/books/${bookId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        {
          data: {},
        }
      )
      .then((response) => {
        toast.success("The Book has been removed");
        //console.log(response)
      })
      .catch((errors) => {
        console.log(errors.response, " ERR");
        // errors.response.status == 400 &&
        //   toast.error("This book already exists");
      });
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
