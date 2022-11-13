import "./App.css";
import Axios from "axios";
import React, { useState } from "react";

function App() {
  const [data, setData] = useState({
    name: "",
    age: 0,
  });

  const onSubmit = (e) => {
    e.preventDefault();

    Axios.post("https://localhost:3001/astronauts", {
      name: data.name,
      age: data.age,
    })
      .then((res) => console.log(res.data))
      .catch(function (error) {
        console.log(error);
      });
  };

  const getAstronauts = (e) => {
    e.preventDefault();
    Axios.get("https://localhost:3001/astronauts").then((res) =>
      console.log(res)
    );
  };

  const handle = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
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
          <button type="submit">Submit</button>
          <button onClick={getAstronauts}>GetAstronauts</button>
        </div>
      </form>
    </div>
  );
}

export default App;
