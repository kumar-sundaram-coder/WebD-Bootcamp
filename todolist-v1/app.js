let express = require("express");
let bodyParser = require("body-parser");

let app = express();
app.set("view engine", "ejs");

//using bodyparser
// app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  let today = new Date();
  let currentDay = today.getDay();
  let day = "";

  switch (currentDay) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;

    default:
      console.log("Error: Current Day is equal to: " + currentDay);
      break;
  }
  res.render("list", { kindOfDay: day });
});

// listen to the foloowing port i.e., 3000
app.listen(3000, () => {
  console.log("Server is running on Port 3000");
});
