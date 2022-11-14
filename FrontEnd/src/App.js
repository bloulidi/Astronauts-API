import "./App.css";
import AstronautsList from "./AstronautsList/AstronautsList";
import AddAstronaut from "./AddAstronaut/AddAstronaut";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [addAstronaut, setAddAstronaut] = useState(false);
  const addAstronauts = () => {
    setAddAstronaut(!addAstronaut);
  };

  return (
    <div>
      {addAstronaut ? (
        <div className="main-container">
          <AddAstronaut />
          <br />
          <Button
            className="add-astronaut-button"
            onClick={addAstronauts}
            variant="outline-primary">
            Check Astronaut List
          </Button>
        </div>
      ) : (
        <div className="main-container">
          <AstronautsList />
          <br />
          <Button
            className="add-astronaut-button"
            onClick={addAstronauts}
            variant="outline-primary">
            Add Astronaut
          </Button>
        </div>
      )}
    </div>
  );
}

export default App;
