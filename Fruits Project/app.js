//jshint esversion:6

// const mongoose = require("mongoose");
const mongoose = require("mongoose");

// mongoose.connect()
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//mongoose.Schema
//fruitSchema
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified!"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

//mongoose.model()
const Fruit = mongoose.model("Fruit", fruitSchema);

//adding items
// const mango = new Fruit({
//   name: "Mango",
//   rating: 6,
//   review: " I like eating them.",
// });

// mango.save();

//mongoose.Schema
//personSchema

const personSchema = mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema,
});

//mongoose.model()
const Person = mongoose.model("Person", personSchema);

// const person = new Person({
//   name: "Gaurav",
//   age: 22,
//   favouriteFruit: pineapple,
// });

// person.save();

// Person.updateOne(
//   { name: "Kumar Sundaram" },
//   { favouriteFruit: mango },
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Updated");
//     }
//   }
// );

const Orange = new Fruit({
  name: "Orange",
  rating: 7,
  review: " I like eating Oranges.",
});
const Kiwi = new Fruit({
  name: "Kiwi",
  rating: 9,
  review: " I like eating Kiwis.",
});
const Banana = new Fruit({
  name: "Banana",
  rating: 8,
  review: " I like eating Bananas.",
});

// Fruit.insertMany(
//     [Orange, Kiwi, Banana],
//     (err) =>{
//         if(err){
//             console.log(err);
//         } else{
//             console.log("Successfully saved all the fuits to fruitsDB");
//         }
//     }
// );

Fruit.find((err, fruits) => {
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();
    for (let fruit of fruits) console.log(fruit.name);
  }
});

// Fruit.updateOne(
//   { name: "Apple" },
//   { name: "ANNNA" },
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("SUCCESSFULLY UPDATED THE DATABASE");
//     }
//   }
// );

// Person.deleteOne(
//   // { name: "Apple" },
//   { name: "Gaurav" },
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("SUCCESSFULLY Deleted the entry from THE DATABASE");
//     }
//   }
// );

// Person.deleteMany({ age: 21 }, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("SUCCESSFULLY Deleted Multiple entries from THE DATABASE");
//   }
// });
