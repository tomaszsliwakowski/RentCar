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
