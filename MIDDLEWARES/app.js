const express = require("express");
const app = express();

app.use((req, res) => {
  let { query } = req.query;
  console.log(query);
  console.log("Hi, I am a Middleware");
  res.send("middleware finished");
});

app.get("/", (req, res) => {
  res.send("Hi, I am root");
});

app.get("/random", (req, res) => {
  res.send("this is a random page");
});

app.listen(3000, () => {
  console.log("server is listening to port 3000");
});
