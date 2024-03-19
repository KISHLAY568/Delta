const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = 3000;
app.get("/register", (req, res) => {
  let { username, password } = req.query;
  res.send(`Standard GET response. Welcome ${username}`);
});
app.post("/register", (req, res) => {
  let { username, password } = req.body;
  res.send(`Standard POST response. Welcome ${username}`);
});
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
