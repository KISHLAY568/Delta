const express = require("express");

const app = express();

const port = 3000;
app.get("/register", (req, res) => {
  let { username, password } = req.query;
  res.send(`Standard GET response. Welcome ${username}`);
});
app.post("/register", (req, res) => {
  res.send("POST request accepted");
});
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
