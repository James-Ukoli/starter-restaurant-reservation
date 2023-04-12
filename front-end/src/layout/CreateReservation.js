import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { createReservation } from "../utils/api";
import ErrorAlert from "./ErrorAlert";
import ReservationForm from "./ReservationForm";

function CreateReservation() {
  const initialFormState = {
    first_name: "",
    last_name: "",
    mobile_number: "",
    reservation_date: "",
    reservation_time: "",
    people: "",
  };
  const [formData, setFormData] = useState({ ...initialFormState });
  const [error, setError] = useState(null);
  const history = useHistory();

  const changeHandler = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const submitHandler = (event) => {
    formData.people = Number(formData.people);
    event.preventDefault();
    setError(null);
    console.log(typeof formData.people);
    createReservation({ ...formData })
      .then(() => {
        history.push(`/dashboard?date=${formData.reservation_date}`);
      })
      .catch(setError);
  };

  return (
    <>
      <ErrorAlert error={error} />
      <div>
        <ReservationForm
          formData={formData}
          changeHandler={changeHandler}
          submitHandler={submitHandler}
        />
      </div>
    </>
  );
}

export default CreateReservation;
