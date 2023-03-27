import React from "react";

function Reservation({ reservation }) {

  return (
    <>
      <div>
        <h3>{reservation.first_name} {reservation.last_name}</h3>
     
        <p> Date: {reservation.reservation_date}</p>
        <p>Time: {reservation.reservation_time}</p>
        <p>Phone: {reservation.mobile_number}</p>
        <p>Party of {reservation.people}</p>
        <button className="btn btn-danger">Cancel</button>
        <button className ="btn btn-primary">Change</button>
      </div>
    </>
  );
}

export default Reservation;
