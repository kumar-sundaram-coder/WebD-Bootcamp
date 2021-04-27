//require all the things/packages

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

// Make "Public" folder as static
app.use(express.static("public"));

//using bodyparser
app.use(bodyParser.urlencoded({ extended: true }));

//sending the Signup html page to client server
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res) => {
  //storing all the required data in const(variable)
  const fname = req.body.fname;
  const lname = req.body.lname;
  const email = req.body.email;

  //storing all the data in object form
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

  // stringify the data stored in object form using JSON.stringify()
  const jsonData = JSON.stringify(data);

  //storing the API url
  const url = "https://us1.api.mailchimp.com/3.0/lists/254288f4f6";

  //storing these to send back to mailchimp
  const options = {
    method: "POST",
    auth: "Kumar:479ccd11b1bba3541a617a7d046c2ded-us1",
  };

  // storing it in const request
  const request = https.request(url, options, (response) => {
    // sending the appropriate file back to client server according to the statusCode
    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }

    //Don't need to log(optional)
    response.on("data", (data) => {
      console.log(JSON.parse(data));
    });
  });

  // sending the JSON data to the mailchimp
  request.write(jsonData);
  request.end();
});

// if failure page is shown and user click TRY AGAIN , then redirect back to the Landing page(signup.html)
app.post("/failure", (req, res) => {
  res.redirect("/");
});

// listen to the foloowing 2 ports
app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on Port 3000");
});

// API Key Mailchimp
// 479ccd11b1bba3541a617a7d046c2ded-us1

// List/Unique ID
// 254288f4f6
