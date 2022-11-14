import React, { useEffect, useState } from "react";
import Axios from "axios";

function AstronautsList() {
  const [astronautList, setAstronautList] = useState([]);

  const deleteAstronaut = (id) => {
    Axios.delete(`https://localhost:3001/astronaut/${id}`).then((res) => {
      window.location.reload();
    });
  };

  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <div className="container">
      <br />
      <h1>List of Astronauts</h1>
      <br />

      {astronautList.map((astronaut, index) => {
        return (
          <div key={index} className="col-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{astronaut.name}</h5>

                <div>Age: {astronaut.age}</div>

                <br />
                <button
                  types="button"
                  className="btn btn-primary"
                  onClick={() => deleteAstronaut(astronaut.id)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AstronautsList;
