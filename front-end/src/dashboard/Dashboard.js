import React, { useEffect, useState } from "react";
import { listReservations, listTables } from "../utils/api";
import ReservationsList from "../reservations/ReservationsList";
import TablesList from "../tables/TablesList";
import DateNavButtons from "./DateNavButtons";
import ErrorAlert from "../layout/ErrorAlert";

/**
 * Defines the dashboard page.
 * @param date
 *  the date for which the user wants to view reservations.
 */
function Dashboard({ date }) {
  const [reservations, setReservations] = useState([]);
  const [reservationsError, setReservationsError] = useState(null);
  const [tables, setTables] = useState([]);
  const [tablesError, setTablesError] = useState(null);

  // Load Dashboard - reservations and tables, remove loading message //
  useEffect(() => {
    loadReservationsAndTables();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  function loadReservations() {
    const abortController = new AbortController();
    setReservationsError(null);
    listReservations({ date }, abortController.signal)
      .then(setReservations)
      .catch(setReservationsError);
    return () => abortController.abort();
  }

  function loadTables() {
    const abortController = new AbortController();
    setTablesError(null);
    listTables(abortController.signal).then(setTables).catch(setTablesError);
    return () => abortController.abort();
  }

  function loadReservationsAndTables() {
    loadReservations();
    loadTables();
  }

  return (
    <main className="dashboard">
      <h1 className="center font-monospace">Dashboard</h1>
      <div className="">
        {!reservations.length && (
          <h2 className="center font-monospace">
            No reservations on this date.
          </h2>
        )}
      </div>
      <ErrorAlert error={reservationsError} setError={setReservationsError} />

      {/* Reservations */}
      <div className="reservations-list">
        <h4 className="mb-2 center">Reservations for {date}</h4>
        <ReservationsList
          reservations={reservations}
          setReservationsError={setReservationsError}
          loadReservationsAndTables={loadReservationsAndTables}
        />
      </div>
      <br></br>
      {/* Button Toolbar */}
      <div className="date-nav center">
        <DateNavButtons currentDate={date} />
      </div>
      <br></br>
      {/* Tables */}
      <div className="tables-list">
        <div className="d-md-flex mb-3 center">
          <h4 className="mb-0">Tables</h4>
        </div>
        {!tables && <h5 className="load-message">Loading...</h5>}
        <ErrorAlert error={tablesError} setError={setTablesError} />
        <TablesList
          tables={tables}
          setTablesError={setTablesError}
          loadReservationsAndTables={loadReservationsAndTables}
        />
      </div>
    </main>
  );
}

export default Dashboard;
