import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { createReservation } from "../utils/api";

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
  const history = useHistory();

  const changeHandler = ({ target }) => {
    formData.people = Number(formData.people);
    setFormData({ ...formData, [target.name]: target.value });
    console.log("changeHandler is working. here is the form data", formData);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Submitted:", typeof formData.people);
    async function addData() {
      try {
        await createReservation({ ...formData }); // :or brackets
        console.log("PEOPLE", formData.people);
        setFormData(initialFormState);
      } catch (error) {
        if (error.name === "AbortError") {
          // Ignore `AbortError`
          console.log("Aborted");
        } else {
          throw error;
        }
      }
    }
    addData();
    history.push(`/dashboard?date=${formData.reservation_date}`);

    //  / saves new reservaton and displays /dashboard page for the date of the new reservation.
    // / The /dashboard page will list all reservations for one date only.
  };

  const cancelHandler = (event) => {
    ///use history?
    event.preventDefault();
    history.goBack();
    console.log("canceled, and sent back to the previous Page");
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <label>First name</label>
        <input
          id="first_name"
          type="text"
          name="first_name"
          onChange={changeHandler}
          value={formData.first_name}
        />
        <br></br>
        <label>Last Name</label>
        <input
          id="last_name"
          type="text"
          name="last_name"
          onChange={changeHandler}
          value={formData.last_name}
        />
        <br></br>
        <label>Mobile Number</label>
        <input
          id="mobile_number"
          type="text"
          name="mobile_number"
          onChange={changeHandler}
          value={formData.mobile_number}
        />
        <br></br>
        <label>Reservation Date</label>
        <input
          id="reservation_date"
          placeholder="YYYY-MM-DD"
          pattern="\d{4}-\d{2}-\d{2}"
          type="date"
          name="reservation_date"
          onChange={changeHandler}
          value={formData.reservation_date}
        />
        <br></br>
        <label>Reservation Time</label>
        <input
          id="reservation_time"
          type="time"
          name="reservation_time"
          placeholder="HH:MM"
          pattern="[0-9]{2}:[0-9]{2}"
          onChange={changeHandler}
          value={formData.reservation_time}
        />
        <br></br>
        <label>Party Size</label>
        <input
          id="people"
          type="number"
          name="people"
          onChange={changeHandler}
          value={formData.people}
        />
        <br></br>
        <button type="submit">Submit</button>
        <button onClick={cancelHandler}>Cancel</button>
      </form>
    </>
  );
}

export default CreateReservation;
