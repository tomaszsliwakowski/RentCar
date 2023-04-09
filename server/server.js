const Car = require("./schema");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());

const database = (module.exports = async () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    await mongoose.connect(
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

app.listen(10000, () => {
  console.log("server on");
});
