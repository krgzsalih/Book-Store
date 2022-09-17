import axios from "axios";
import { toast } from "react-toastify";
import { BaseURLDB, clientURL } from "../constants/axios";

const DataService = async () => {
  try {
    const response = await axios.get(`${BaseURLDB}${clientURL.books}`);
    return response;
  } catch {
    console.log("error");
  }
};

const SearchService = async (word, filter) => {
  try {
    const response = await axios.get(
      `${BaseURLDB}${clientURL.books}?filters[${filter}][$containsi]=${word}`
    );
    return response;
  } catch {
    console.log("error");
  }
};

const DeleteService = async (bookId, token) => {
  try {
    const response = await axios
      .delete(
        `${BaseURLDB}${clientURL.books}/${bookId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        {
          data: {},
        }
      )
      .then(toast.success("The Book has been removed"));
    return response;
  } catch {
    console.log("error");
    // errors.response.status == 400 &&
    //   toast.error("This book already exists");
  }
};

export { DataService, SearchService, DeleteService };
