const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const carSchema = new Schema({
  name: String,
  kilometers: String,
  src: String,
  dailyPrice: Number,
  monthlyPrice: Number,
  gearType: String,
  fuel: String,
});

const Car = model("Car", carSchema);

module.exports = Car;

//const carObj = new Car({
//name: "Audi S3 Car",
//kilometers: "10k",
//src: "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
// dailyPrice: 70,
//monthlyPrice: 1600,
//gearType: "Auto",
// fuel: "Petrol",
///});
//const carObj2 = new Car({
// name: "HONDA cITY 5 Seater Car",
// kilometers: "20k",
//src: "https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
//dailyPrice: 50,
//monthlyPrice: 1500,
//gearType: "Auto",
// fuel: "Petrol",
//});

//carObj.save();
//carObj2.save();
