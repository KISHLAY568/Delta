const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
let posts = [
  {
    username: "kishlay",
    content: "I love coding",
  },
  {
    username: "brocklesnar",
    content: "eat sleep conquer repeat",
  },
  {
    username: "jhoncena",
    content: "you can't see me",
  },
];

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});
app.listen(port, () => {
  console.log("listening to port 3000");
});
