const express = require("express");
const https = require("https");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

// Fix the error: Safari can’t open the page “https://localhost:3000” because Safari can’t establish a secure connection to the server “localhost”.
const options = {
  key: fs.readFileSync(path.join(__dirname, "/server.key")),
  cert: fs.readFileSync(path.join(__dirname, "/server.crt")),
};

app.get("/", (req, res) => {
  res.send("Hello World, from express");
});

https.createServer(options, app).listen(port, () => {
  console.log(`Example app listening at https://localhost:${port}`);
});
