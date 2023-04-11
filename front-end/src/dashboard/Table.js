import React from "react";

function Table({ table }) {
  return (
    <>
      <div className="border">
        <p>{table.table_name}</p>
        <p data-table-id-status={table.table_id}>{table.status}</p>
      </div>
    </>
  );
}

export default Table;
