import React from "react";

function Table({ table }) {
  return (
    <>
      <p>{table.table_name}</p>
      <p data-table-id-status={table.table_id}>{table.status}</p>
    </>
  );
}

export default Table;
