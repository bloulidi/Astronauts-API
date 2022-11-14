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
        <div>
          <AddAstronaut />
          <br />
          <Button onClick={addAstronauts} variant="outline-primary">
            Check Astronaut List
          </Button>
        </div>
      ) : (
        <div>
          <AstronautsList />
          <br />
          <Button onClick={addAstronauts} variant="outline-primary">
            Add Astronaut
          </Button>
        </div>
      )}
    </div>
  );
}

export default App;
