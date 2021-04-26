const express = require("express");
const https = require("https");
const app = express();

app.get("/", (req, res) => {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=3c9fd18cd2553f7831d9ac4c58187f96&units=metric";

  https.get(url, (response) => {
    // console.log(response);

    console.log(response.statusCode);

    response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;

      const icon = weatherData.weather[0].icon;
      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

      res.write("<p>The weather is currently" + weatherDescription + "</p>");
      res.write("<h1>The Temperature in Delhi is" + temp + " Deg Celcius</h1>");
      res.write("<img src=" + imageURL + ">");
      res.send();

      //   console.log(temp);
      //   console.log(weatherDescription);

      //   console.log(weatherData);
      //   console.log(data);
    });
  });

  //   res.send("Server is Up and running...");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
