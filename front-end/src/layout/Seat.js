import React from "react";
import { useEffect, useState } from "react";
import { listTables, updateSeatReservation } from "../utils/api";
import ErrorAlert from "./ErrorAlert";
import { useParams, useHistory } from "react-router";

function Seat() {
  const { reservation_id } = useParams();
  const history = useHistory();
  const [tables, setTables] = useState([]);
  const [error, setError] = useState(null);
  const [seatTable, setSeatTable] = useState("");

  useEffect(() => {
    async function loadTables() {
      const abort = new AbortController();
      try {
        const response = await listTables(abort.signal);
        setTables((previous) => response);
      } catch (error) {
        setError(error);
      }
      return abort.abort();
    }
    loadTables();
  }, [reservation_id]);

  async function submitHandler(event) {
    event.preventDefault();
    const c = new AbortController();
    try {
      console.log("PING");
      await updateSeatReservation(seatTable, reservation_id, c.signal);
      history.push(`/dashboard`);
    } catch (error) {
      setError(error);
    }
    return () => c.abort();
  }

  const cancelHandler = (event) => {
    history.goBack();
  };

  const handleSelectTable = (event) => {
    setSeatTable(event.target.value);
    console.log("setSeatTable", event.target.value);
  };

  const options = tables.map((table) => (
    <option
      key={table.table_id}
      value={table.table_id}
      disabled={table.capacity < table.occupied}
    >
      {table.table_name} - {table.capacity}
    </option>
  ));

  return (
    <>
      {/* < <p>This is the seat page</p>> */}
      <ErrorAlert error={error} />
      <form onSubmit={submitHandler} className="d-flex justify-content-center">
        <label htmlFor="seat_reservation">
          Seat at:
          <select
            id="table_id"
            name="table_id"
            onChange={handleSelectTable}
            className="mr-1"
            value={seatTable}
            required
          >
            {/* <option defaultValue>Select a table</option> */}
            {options}
          </select>
        </label>
        <button className="btn btn-primary mr-1" type="submit">
          Submit
        </button>
        <button className="btn btn-secondary" onClick={cancelHandler}>
          Cancel
        </button>
      </form>
    </>
  );
}

export default Seat;
