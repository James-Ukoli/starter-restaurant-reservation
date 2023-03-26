import React from "react";

function Reservation({ reservation }) {
  return (
    <>
      <div>
        <h3>{reservation.first_name}</h3>
        <h3>{reservation.last_name}</h3>
        <p>{reservation.reservation_date}</p>
        <p>{reservation.reservation_time}</p>
        <button>Cancel</button>
        <button>Change</button>
      </div>
    </>
  );
}

export default Reservation;
