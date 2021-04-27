const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//using bodyparser
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello");
  //sending the index.html page to client server
  // res.sendFile(__dirname + "/index.html");
});

// listen to the foloowing port i.e., 3000
app.listen(3000, () => {
  console.log("Server is running on Port 3000");
});
