const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

//mongoose to connect with mongoDB
mongoose.connect("mongodb://localhost:27017/todolistDB", {
  useNewUrlParser: true,
});

//schema
const itemsSchema = {
  name: String,
};

//mongoose model creation
const Item = mongoose.model("Item", itemsSchema);

//mongoose document creation

const item1 = new Item({
  name: "Welcome to your todoList!",
});

const item2 = new Item({
  name: "Hit the + button to add a new item.",
});

const item3 = new Item({
  name: "<-- Hit this to delete an item.",
});

const defaultItems = [item1, item2, item3];

Item.insertMany(defaultItems, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully saved default items to DB");
  }
});

//ejs
app.set("view engine", "ejs");

//using bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("list", { listTitle: "Today", newListItems: items });
});

app.post("/", (req, res) => {
  const item = req.body.newItem;
  console.log(req.body);

  if (req.body.list === "Work List") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", (req, res) => {
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.post("/work", (req, res) => {
  const item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

// listen to the following port i.e., 3000
app.listen(3000, () => {
  console.log("Server is running on Port 3000");
});
