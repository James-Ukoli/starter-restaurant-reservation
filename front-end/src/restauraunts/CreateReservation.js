import React from "react"
import { useState } from "react";
import RestaurantForm from "./RestaurantForm";



function CreateReservation(){
const initialFormState = {
        first_name: "",
        last_name: "",
        mobile_number: "",
        reservation_date: "",
        reervation_time: "",
        people: "",
      };

const [formData, setFormData] = useState({...initialFormState});

const changeHandler = ({target}) => {
console.log("changeHandler is working")
}

const submitHandler = (event) => {
event.preventDefault();
console.log("submitHandler is logging")
}


return (
 <>
<form action="">
   <RestaurantForm formData={formData} handleChange={changeHandler}/>
    <button onSubmit={submitHandler}>Submit</button>
    <button>Cancel</button>
</form>
</>
)
}




export default CreateReservation