import React, { useEffect, useState } from "react";
import Axios from "axios";

function AstronautsList() {
  const [astronautList, setAstronautList] = useState([]);

  const deleteAstronaut = (id) => {
    Axios.delete(`https://localhost:3001/astronaut/${id}`).then((res) => {
      window.location.reload();
    });
  };

  const loadAstronauts = () => {
    Axios.get("https://localhost:3001/astronauts").then((res) => {
      setAstronautList(res.data);
    });
  };

  useEffect(() => {
    loadAstronauts();
  }, []);

  return (
    <div className="container">
      <br />
      <h1>List of Astronauts</h1>
      <br />

      {astronautList.length != 0 ? (
        astronautList.map((astronaut, index) => {
          return (
            <div key={index} className="col-4">
              <br />
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
        })
      ) : (
        <div>No Astronauts in the list</div>
      )}
    </div>
  );
}

export default AstronautsList;
