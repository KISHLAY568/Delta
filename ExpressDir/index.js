const express = require("express");
const app = express();

// console.dir(app);

let port = 3000; //8080

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello! i am root");
});
app.get("/search", (req, res) => {
  let { q } = req.query;
  if(!q){
    res.end("Nothing Searched");
  }
  res.send(`Search results for query ${q}`);
});
app.get("/:username/:id", (req, res) => {
  //   console.log(req.params);
  let { username, id } = req.params;
  let htmlStr = `<h1>Welcome to the page of @${username}</h1>`;
  res.send(htmlStr);
});

// app.get("/apple", (req, res) => {
//   res.send("You are now on apple page");
// });
// app.get("/mango", (req, res) => {
//   res.send("You are now on mango page");
// });
// app.get("*", (req, res) => {
//   res.send("This Path does not exist");
// });
// app.post("*", (req, res) => {
//   res.send("You sent a post request to root");
// });

// app.use((req, res) => {
//   console.log("request recieved");
//   //   res.send("this is a basic response");
//   res.send("<h1>Fruits</h1><ul><li>Apple</li><li>Banana</li></ul>");
// });
