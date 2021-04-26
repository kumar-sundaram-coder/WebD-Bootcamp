const { response } = require("express");
const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Server Started on Port 3000");
});

app.get("/", (req, res) => {
  res.send("<h1>HELLO PEEPS!</h1>");
});

app.get("/about", (req, res) => {
  res.send("Hello Pal, I'm Kumar Sundaram.");
});
app.get("/contact", (req, res) => {
  res.send("Contact Me at : kumar@gmail.com");
});
app.get("/hobbies", (req, res) => {
  res.send(
    "<h1>My Hobbies are as Follows:</h1><ul><li>Reading</li><li>Listening to music</li><li>Watching Movies</li><li>Swimming</li></ul>"
  );
});
