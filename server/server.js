const Car = require("./schema");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const database = (module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect(
      "mongodb+srv://RentCarUser:RentCar123@rentcar.hkjn4bn.mongodb.net/RentCar?retryWrites=true&w=majority",
      connectionParams
    );
    console.log("connected succesfully");
  } catch (error) {
    console.log("connected failed");
    console.log(error);
  }
});

database();

const CarForRent = app.get("/api", async (req, res) => {
  try {
    const result = await Car.find();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(5000, () => {
  console.log("server on");
});

//const carObj = new Car({
// name: "Toyota Corolla",
//kilometers: "87k",
// src: "https://w7.pngwing.com/pngs/51/1011/png-transparent-2014-toyota-corolla-car-2016-toyota-corolla-2013-toyota-corolla-sedan-toyota-compact-car-sedan-car-thumbnail.png",
// dailyPrice: 45,
// monthlyPrice: 1200,
// gearType: "Manual",
//fuel: "Petrol",
//});

//carObj.save();
