import axios from "axios";
import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../context/use-auth";
import { useData } from "../../context/use-data";
import Style from "./style.module.scss";

const MyForm = () => {
  const { token, mode } = useAuth();
  const { updatedBookId, bookParameters } = useData();
  const [inputs, setInputs] = useState({});

  const handleChange = async (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputs, " inputs");
    if (inputs.count || inputs.price || inputs.description) {
      await axios
        .put(
          `http://localhost:1337/api/books/${updatedBookId}`,
          {
            data: {
              count: `${inputs.count || bookParameters.count}`,
              price: `${inputs.price || bookParameters.price}`,
              description: `${
                inputs.description || bookParameters.description
              }`,
            },
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          toast.success("Updating book is fulfilled");
          //console.log(response)
        })
        .catch((errors) => {
          console.log(errors.response, " ERR");
          // errors.response.status == 400 &&
          //   toast.error("This book already exists");
        });
    } else {
      toast.error("Undefined error!");
    }
  };

  return (
    <div className={Style.container}>
      <form onSubmit={handleSubmit}>
        <label>
          Count
          <input
            type="number"
            name="count"
            value={inputs.count || bookParameters.count}
            onChange={handleChange}
            className={mode}
          />
        </label>
        <label>
          Price
          <input
            type="number"
            name="price"
            value={inputs.price || bookParameters.price}
            onChange={handleChange}
            className={mode}
          />
        </label>
        <label>Description</label>
        <textarea
          name="description"
          value={inputs.description || bookParameters.description}
          onChange={handleChange}
          className={mode}
        />
        <button  className={mode} type="submit">Save</button>
      </form>
    </div>
  );
};

export default MyForm;
