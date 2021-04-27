const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const { url } = require("inspector");

const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res) => {
  const fname = req.body.fname;
  const lname = req.body.lname;
  const email = req.body.email;
  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: fname,
          LNAME: lname,
        },
      },
    ],
  };
  const jsonData = JSON.stringify(data);
  const url = "https://us1.api.mailchimp.com/3.0/lists/254288f4f6";
  const options = {
    method: "POST",
    auth: "Kumar:479ccd11b1bba3541a617a7d046c2ded-us1",
  };

  const request = https.request(url, options, (response) => {
    response.on("data", (data) => {
      console.log(JSON.parse(data));
    });
  });
  request.write(jsonData);
  request.end();

  console.log(fname, lname, email);
  res.send("Details Noted, Thanks for Subscribing!!!");
});

app.listen(3000, () => {
  console.log("Server is running on Port 3000");
});

// API Key Mailchimp
// 479ccd11b1bba3541a617a7d046c2ded-us1

// List/Unique ID
// 254288f4f6
