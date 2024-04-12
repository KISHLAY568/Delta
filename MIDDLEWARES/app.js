const express = require("express");
const app = express();

// app.use((req, res, next) => {
//   //   let { query } = req.query;
//   //   console.log(query);
//   console.log("Hi, I am first  Middleware");
//   //   res.send("middleware finished");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("Hi, I am second  Middleware");
//   next();
// });

//logger - morgan
// app.use((req, res, next) => {
//   req.time = new Date(Date.now()).toString();
//   console.log(req.method, req.hostname, req.path, req.time);
//   next();
// });

app.use("/api", (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  res.send("ACCESS DENIED!");
});

app.get("/api", (req, res) => {
  res.send("data");
});

app.get("/", (req, res) => {
  res.send("Hi, I am root");
});

app.get("/random", (req, res) => {
  res.send("this is a random page");
});

//404
app.use((req, res) => {
  res.send("Page not found!");
});

app.listen(3000, () => {
  console.log("server is listening to port 3000");
});
