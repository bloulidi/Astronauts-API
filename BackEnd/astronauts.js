const express = require("express");
const https = require("https");
const fs = require("fs");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

// Fix the error: Safari can’t open the page “https://localhost:3000” because Safari can’t establish a secure connection to the server “localhost”.
const options = {
  key: fs.readFileSync(path.join(__dirname, "/server.key")),
  cert: fs.readFileSync(path.join(__dirname, "/server.crt")),
};

const app = express();
const port = 3001;

let astronauts = [];

// Enabling middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/astronauts", (req, res) => {
  const astronautsReq = req.body;

  // Output the book to the console for debugging
  console.log(astronautsReq);
  astronauts.push(astronautsReq);

  res.send("Astronauts is added to the database");
});

app.delete("/astronaut/:id", (req, res) => {
  const id = req.params.id;

  // Remove item from the books array
  astronauts = astronauts.filter((astronaut) => {
    if (astronaut.id !== id) {
      return true;
    }
    return false;
  });

  res.send("Astronaut is deleted");
});

app.get("/astronauts", (req, res) => {
  res.json(astronauts);
});

https.createServer(options, app).listen(port, () => {
  console.log(`Example app listening at https://localhost:${port}`);
});
