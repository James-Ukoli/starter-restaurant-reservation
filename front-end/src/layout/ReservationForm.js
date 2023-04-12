import React from "react";
import { useHistory } from "react-router";

function ReservationForm({ formData, changeHandler, submitHandler }) {
  const history = useHistory();

  const cancelHandler = (event) => {
    event.preventDefault();
    history.goBack();
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <label>First name</label>
        <input
          id="first_name"
          key="first_name"
          type="text"
          name="first_name"
          onChange={changeHandler}
          value={formData.first_name}
        />
        <br></br>
        <label>Last Name</label>
        <input
          id="last_name"
          key="last_name"
          type="text"
          name="last_name"
          onChange={changeHandler}
          value={formData.last_name}
        />
        <br></br>
        <label>Mobile Number</label>
        <input
          id="mobile_number"
          key="mobile_number"
          type="text"
          name="mobile_number"
          onChange={changeHandler}
          value={formData.mobile_number}
        />
        <br></br>
        <label>Reservation Date</label>
        <input
          id="reservation_date"
          key="reservation_date"
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
          key="reservation_time"
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
          key="people"
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

export default ReservationForm;
