import "./App.css";
import AstronautsList from "./AstronautsList/AstronautsList";
import AddAstronaut from "./AddAstronaut/AddAstronaut";
import { useState } from "react";

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
          <button onClick={addAstronauts}>Check Astronaut List</button>
        </div>
      ) : (
        <div>
          <AstronautsList />
          <br />
          <button onClick={addAstronauts}>Add Astronaut</button>
        </div>
      )}
    </div>
  );
}

export default App;
