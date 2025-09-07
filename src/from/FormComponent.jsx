import React, { useState } from 'react';
import axios from 'axios';

function FormComponent() {
  const [data, setData] = useState({
    name: "",
    age: "",
    city: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }

  function getData(event) {
    event.preventDefault();
    console.log("Sending Data:", data);

    axios.post("https://abisheik-backend.onrender.com/api/form", data)
      .then(response => {
        console.log("Response:", response.data);
        console.log("Status:", response.status);
      })
      .catch(error => {
        console.error("Error posting data:", error);
      });
  }

  return (
    <div>
      <form onSubmit={getData}>
        <label>Name : </label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
        /><br /><br />

        <label>Age : </label>
        <input
          type="number"
          name="age"
          value={data.age}
          onChange={handleChange}
        /><br /><br />

        <label>City : </label>
        <input
          type="text"
          name="city"
          value={data.city}
          onChange={handleChange}
        /><br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormComponent;
