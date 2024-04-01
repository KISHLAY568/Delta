const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const path = require("path");
const express = require("express");
const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "7494016678@aA",
});

let getRandomUser = () => {
  return [
    faker.datatype.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// let q = "INSERT INTO user (id,username,email,password) VALUES ?";
// let data = [];

// for (let i = 1; i <= 100; i++) {
//   data.push(getRandomUser());
// }

// try {
//   connection.query(q, [data], (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     // console.log(result.length);
//     // console.log(result[0]);
//     // console.log(result[1]);
//   });
// } catch (err) {
//   console.log(err);
// }

// connection.end();

// console.log(getRandomUser());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  let q = "SELECT count(*) FROM user";
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
});

app.listen(4000, () => {
  console.log("server is live on port 4000");
});
