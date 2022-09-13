import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useData } from "../../context/use-data";
import Style from "./style.module.scss";

const MyForm = () => {
  const { updatedBookId } = useData();
  const [inputs, setInputs] = useState({});
  const [info, setInfo] = useState();
  const [dbInfo, setdbInfo] = useState();

  useEffect(() => {
    console.log(updatedBookId, " ID");
    getData();
  }, []);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const getData = async () => {
    const { data } = await axios
      .get(`http://localhost:1337/api/books/${updatedBookId}`)
      .then(
        setdbInfo(data.attributes)
      );

    console.log(info, " INFO");
    console.log(inputs, " INPUTS");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (inputs.count || inputs.price) {
      await axios
        .put(
          `http://localhost:1337/api/books/${updatedBookId}`,
          {
            data: {
              count: `${inputs.count}` || info.attributes.count,
              price: `${inputs.price}` || info.attributes.price,
              description:
                `${inputs.description}` || info.attributes.description,
            },
          }
          // {
          //   headers: {
          //     Authorization: `Bearer ${token}`,
          //   },
          // }
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
    } else if (inputs.count == null && inputs.price == null) {
      toast.error("Please insert at least one parameter");
    } else {
      toast.error("Undefined error!");
    }
  };

  return (
    <div className={Style.container}>
      <form onSubmit={handleSubmit}>
        <label>
          Count:
          <input
            type="number"
            name="count"
            value={inputs.count || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={inputs.price || ""}
            onChange={handleChange}
          />
        </label>
        <label>Description:</label>
        <textarea
          name="textarea"
          value={inputs.textarea || ""}
          onChange={handleChange}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default MyForm;
