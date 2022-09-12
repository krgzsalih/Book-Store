import React from "react";
import { useState } from "react";
import Style from "./style.module.scss";

const MyForm = () => {
  const [inputs, setInputs] = useState({});
  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute"
  );

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleChangeArea = (event) => {
    setTextarea(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <div className={Style.container}>
      <form onSubmit={handleSubmit}>
        <label>
          Count:
          <input
            type="number"
            name="username"
            value={inputs.username || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="age"
            value={inputs.age || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
        </label>
          <textarea value={textarea} onChange={handleChangeArea} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default MyForm;
