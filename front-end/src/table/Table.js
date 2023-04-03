import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import { createTable } from "../utils/api";
import ErrorAlert from "../layout/ErrorAlert";

function Table() {
  const initialFormState = {
    table_name: "",
    capacity: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });
  const [error, setError] = useState(null);
  const history = useHistory();

  const changeHandler = ({ target }) => {
    formData.capacity = Number(formData.capacity);
    setFormData({ ...formData, [target.name]: target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    createTable({ ...formData })
      .then(() => {
        history.push(`/dashboard`);
      })
      .catch(setError);
  };

  const cancelHandler = (event) => {
    event.preventDefault();
    history.goBack();
  };

  return (
    <>
      <ErrorAlert error={error} />
      <form onSubmit={submitHandler}>
        <label>Table Name: </label>
        <input
          id="table_name"
          key="table"
          name="table_name"
          onChange={changeHandler}
          value={formData.table_name}
        />
        <br></br>
        <label>Capacity:</label>
        <input
          id="capacity"
          key="capacity"
          name="capacity"
          onChange={changeHandler}
          value={formData.capacity}
        />
        <button type="submit">Submit</button>
        <button onClick={cancelHandler}>Cancel</button>
      </form>
    </>
  );
}

export default Table;
