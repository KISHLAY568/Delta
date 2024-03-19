const express = require("express");

const app = express();

const port = 3000;
app.get("/register", (req, res) => {
  res.send("GET request accepted");
});
app.post("/register", (req, res) => {
  res.send("POST request accepted");
});
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
