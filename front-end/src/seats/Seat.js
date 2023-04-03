import React from "react";
import { useEffect, useState } from "react";
import { listTables } from "../utils/api";
import ErrorAlert from "../layout/ErrorAlert";

function Seat() {
  const [tables, setTables] = useState([]);
  const [tablesError, setTablesError] = useState(null);

  useEffect(() => {
    function loadTables() {
      const abortController = new AbortController();
      setTablesError(null);
      listTables(abortController.signal).then(setTables).catch(setTablesError);
      return () => abortController.abort();
    }
    loadTables();
  }, []);

  return (
    <>
      {/* < <p>This is the seat page</p>> */}
      <ErrorAlert error={tablesError} />
      <form>
        <select name="table_id">
          {tables.map((table) => (
            <option>
              {table.table_name} - {table.capacity}
            </option>
          ))}
          <button>Submit</button>
          <button>Cancel</button>
        </select>
      </form>
    </>
  );
}

export default Seat;
