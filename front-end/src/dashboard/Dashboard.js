import React, { useEffect, useState } from "react";
import { listReservations, listTables } from "../utils/api";
import ErrorAlert from "../layout/ErrorAlert";
import { previous, next, today } from "../utils/date-time";
import Reservation from "./Reservation";
import { useHistory } from "react-router";
import Table from "./Table";

/**
 * Defines the dashboard page.
 * @param date
 *  the date for which the user wants to view reservations.
 * @returns {JSX.Element}
 */
function Dashboard({ date }) {
  const history = useHistory();
  const [reservations, setReservations] = useState([]);
  const [reservationsError, setReservationsError] = useState(null);
  const [tables, setTables] = useState([]);
  const [tablesError, setTablesError] = useState(null);

  useEffect(() => {
    function loadDashboard() {
      const abortController = new AbortController();
      setReservationsError(null);
      listReservations({ date }, abortController.signal)
        .then(setReservations)
        .catch(setReservationsError);
      return () => abortController.abort();
    }
    loadDashboard();
  }, [date]);

  useEffect(() => {
    function loadTables() {
      const abortController = new AbortController();
      setTablesError(null);
      listTables(abortController.signal).then(setTables).catch(setTablesError);
      return () => abortController.abort();
    }
    loadTables();
  }, []);

  function nextHelper() {
    const nextDate = next(date);
    history.push(`/dashboard?date=${nextDate}`);
  }

  function previousHelper() {
    const previousDate = previous(date);
    //get current date
    //set current date to be curr date - 1
    //make sure it is formatted correctly
    //history.push it to the right format
    history.push(`/dashboard?date=${previousDate}`);
  }

  function todayHelper() {
    const todayDate = today(date);
    history.push(`/dashboard?date=${todayDate}`);
  }

  return (
    <main>
      <h1>Dashboard</h1>
      <div className="d-md-flex mb-3">
        <h4 className="mb-0">Reservations for date</h4>
      </div>
      <div>
        <button onClick={nextHelper}>Next</button>
        <button onClick={previousHelper}>Previous</button>
        <button onClick={todayHelper}>Today</button>
      </div>
      <hr></hr>
      <ErrorAlert error={reservationsError} />
      {/* {JSON.stringify(reservations)} */}
      <div>
        <h3 className="border">Reservations</h3>
        {reservations.map((reservation) => (
          <Reservation reservation={reservation} />
        ))}
      </div>
      <br></br>
      <ErrorAlert error={tablesError} />
      <div>
        <h3 className="border">Tables</h3>
        {tables.map((table) => (
          <Table table={table} />
        ))}
      </div>
    </main>
  );
}

export default Dashboard;
