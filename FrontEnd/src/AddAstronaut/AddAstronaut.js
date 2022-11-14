import Axios from "axios";
import React, { useState } from "react";
import uniqid from "uniqid";
import Button from "react-bootstrap/Button";

function AddAstronaut() {
  const [data, setData] = useState({
    name: "",
    age: 0,
    id: "",
  });
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    Axios.post("https://localhost:3001/astronauts", {
      name: data.name,
      age: data.age,
      id: uniqid(),
    })
      .then(() => setMessage("Successfully Added Astronaut"))
      .catch(function (error) {
        console.log(error);
      });
  };

  const handle = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };

  return (
    <div className="container">
      <h1>Add Astronauts</h1>
      <form
        id="main-login"
        action="http://localhost:3000/astronauts"
        method="POST"
        onSubmit={onSubmit}>
        <label>
          <span className="text">Name:</span>
          <input
            onChange={(e) => handle(e)}
            type="text"
            id="name"
            name="name"
            value={data.name}
          />
          <br />
        </label>
        <br />
        <label>
          <span className="text">Age:</span>
          <input
            onChange={(e) => handle(e)}
            type="number"
            id="age"
            name="age"
            min="0"
            value={data.age}
          />
          <br />
        </label>
        <br />
        <div className="align-right">
          <Button variant="primary" type="submit">
            Add Astronaut
          </Button>
        </div>
        <div>{message}</div>
      </form>
    </div>
  );
}

export default AddAstronaut;
