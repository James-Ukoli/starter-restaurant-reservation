import React from "react";

function EditReservation() {
  return (
    <>
      <ErrorAlert error={error} />
      <div>
        <ReservationForm
          formData={formData}
          changeHandler={changeHandler}
          submitHandler={submitHandler}
        />
      </div>
    </>
  );
}
