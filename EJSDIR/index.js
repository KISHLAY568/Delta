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
  let followers = ["Tony", "Steve", "Bruce", "Brock", "Rock"];
  let { username } = req.params;
  res.render("instagram.ejs", { username,followers });
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
