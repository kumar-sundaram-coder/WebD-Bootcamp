const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  //   console.log(__dirname);
});

app.post("/", (req, res) => {
  //   const number1 = req.body.num1;
  //   const number1 = +req.body.num1;
  //   const number1 = Number(req.body.num1);

  const number1 = parseInt(req.body.num1);
  const number2 = parseInt(req.body.num2);
  const result = number1 + number2;
  res.send("The Result of the Calculation is: " + result);

  //     console.log(req.body);
  //   res.send("Thanks for Posting That ");
});

app.get("/bmicalculator", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", (req, res) => {
  const userWeight = parseFloat(req.body.weight);
  const userHeight = parseFloat(req.body.height);

  const userBMI = userWeight / Math.pow(userHeight, 2);

  res.send("Your BMI is:" + userBMI);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
