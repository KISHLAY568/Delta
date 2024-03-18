const express = require("express");
const path = require("path");
const app = express();

const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.get("/", (req, res) => {
  res.render("home.ejs");
});
app.get("/home", (req, res) => {
  res.send("home");
});
app.get("/rolldice", (req, res) => {
  let diceVal = Math.floor(Math.random() * 6) + 1;
  res.render("rollDice.ejs", { diceVal });
});
app.get("/ig/:username", (req, res) => {
  let { username } = req.params;
  res.render("instagram.ejs",{username});
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
