import React, { useEffect, useState } from "react";
import Axios from "axios";

function AstronautsList() {
  const [astronautList, setAstronautList] = useState([]);

  const deleteAstronaut = (id) => {
    Axios.delete(`https://localhost:3001/astronaut/${id}`).then((res) => {
      window.location.reload();
    });
  };

  //   const editAstronaut = (id) => {
  //     Axios.post(`https://localhost:3001/astronaut/${id}`).then((res) => {
  //       window.location.reload();
  //     });

  //     const { title, author, publisher, publish_date, numOfPages } = book;

  //     // Filling information about the book in the form inside the modal
  //     document.getElementById("isbn").value = isbn;
  //     document.getElementById("title").value = title;
  //     document.getElementById("author").value = author;
  //     document.getElementById("publisher").value = publisher;
  //     document.getElementById("publish_date").value = publish_date;
  //     document.getElementById("numOfPages").value = numOfPages;

  //     // Setting up the action url for the book
  //     document.getElementById(
  //       "editForm"
  //     ).action = `http://localhost:3000/book/${isbn}`;
  //   };

  const loadBooks = () => {
    Axios.get("https://localhost:3001/astronauts").then((res) => {
      setAstronautList(res.data);
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
                  {/* <button
                  types="button"
                  className="btn btn-primary"
                  onClick={() => editAstronaut(astronaut.id)}>
                  Edit
                </button> */}
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
