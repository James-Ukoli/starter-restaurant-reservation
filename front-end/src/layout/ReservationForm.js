import { useHistory } from "react-router-dom";

const ReservationForm = ({ handleSubmit, formData, setFormData }) => {
  //useHistory hook
  const history = useHistory();

  //event and click handlers
  const handleCancel = (e) => {
    e.preventDefault();
    history.goBack();
  };

  //main render
  return (
    <form className="form-group reservationform__text" onSubmit={handleSubmit}>
      <label className="form-label">First Name:</label>
      <br />
      <input
        name="first_name"
        type="text"
        required
        onChange={(e) =>
          setFormData({
            first_name: e.target.value,
            last_name: formData.last_name,
            mobile_number: formData.mobile_number,
            reservation_date: formData.reservation_date,
            reservation_time: formData.reservation_time,
            people: formData.people,
          })
        }
        value={formData.first_name}
        className="reservationform__input-field-width form-control"
      />
      <br />
      <label className="form-label">Last Name:</label>
      <br />
      <input
        name="last_name"
        type="text"
        required
        onChange={(e) =>
          setFormData({
            first_name: formData.first_name,
            last_name: e.target.value,
            mobile_number: formData.mobile_number,
            reservation_date: formData.reservation_date,
            reservation_time: formData.reservation_time,
            people: formData.people,
          })
        }
        value={formData.last_name}
        className="form-control"
      />
      <br />
      <label className="form-label">Mobile Number:</label>
      <br />
      <input
        name="mobile_number"
        type="text"
        required
        onChange={(e) =>
          setFormData({
            first_name: formData.first_name,
            last_name: formData.last_name,
            mobile_number: e.target.value,
            reservation_date: formData.reservation_date,
            reservation_time: formData.reservation_time,
            people: formData.people,
          })
        }
        value={formData.mobile_number}
        className="form-control"
      />
      <br />
      <label>Reservation Date:</label>
      <br />
      <input
        name="reservation_date"
        type="date"
        required
        onChange={(e) =>
          setFormData({
            first_name: formData.first_name,
            last_name: formData.last_name,
            mobile_number: formData.mobile_number,
            reservation_date: e.target.value,
            reservation_time: formData.reservation_time,
            people: formData.people,
          })
        }
        value={formData.reservation_date}
        className="form-control"
      />
      <br />
      <label>Reservation Time:</label>
      <br />
      <input
        name="reservation_time"
        type="time"
        required
        onChange={(e) =>
          setFormData({
            first_name: formData.first_name,
            last_name: formData.last_name,
            mobile_number: formData.mobile_number,
            reservation_date: formData.reservation_date,
            reservation_time: e.target.value,
            people: formData.people,
          })
        }
        value={formData.reservation_time}
        className="form-control"
      />
      <br />
      <label>Amount of People:</label>
      <br />
      <input
        name="people"
        type="number"
        required
        onChange={(e) =>
          setFormData({
            first_name: formData.first_name,
            last_name: formData.last_name,
            mobile_number: formData.mobile_number,
            reservation_date: formData.reservation_date,
            reservation_time: formData.reservation_time,
            people: e.target.valueAsNumber,
          })
        }
        value={formData.people}
        className="form-control"
      />
      <br />

      <div className="d-flex justify-content-around">
        <button className="reservationform__btn--submit" type="submit">
          Submit
        </button>
        <button className="reservationform__btn--cancel" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ReservationForm;
