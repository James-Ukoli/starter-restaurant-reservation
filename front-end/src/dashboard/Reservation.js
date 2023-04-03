import React from "react";
import { Link } from "react-router-dom";

function Reservation({ reservation }) {
  return (
    <>
      <div>
        <h3>
          {reservation.first_name} {reservation.last_name}
        </h3>

        <p> Date: {reservation.reservation_date}</p>
        <p>Time: {reservation.reservation_time}</p>
        <p>Phone: {reservation.mobile_number}</p>
        <p>Party of {reservation.people}</p>
        <Link
          to={`/reservations/${reservation.reservation_id}/seat`}
          className="btn btn-primary"
        >
          Seat
        </Link>
      </div>
    </>
  );
}

export default Reservation;
