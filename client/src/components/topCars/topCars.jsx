import React from "react";
import TopCars from "./index";
import CarContainer from "../car/car";

const testCar = {
  name: "Audi S3 Car",
  kilometers: "10k",
  thumbnailSrc:
    "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
  dailyPrice: 70,
  monthlyPrice: 1600,
  gearType: "Auto",
  fuel: "Petrol",
};

const testCar2 = {
  name: "HONDA cITY 5 Seater Car",
  kilometers: "20k",
  thumbnailSrc:
    "https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
  dailyPrice: 50,
  monthlyPrice: 1500,
  gearType: "Auto",
  fuel: "Petrol",
};

export default function TopCarsContainer() {
  return (
    <TopCars>
      <TopCars.Title>Explore Our Top Deals</TopCars.Title>
      <TopCars.CarsContainer>
        <CarContainer {...testCar} />
        <CarContainer {...testCar} />
        <CarContainer {...testCar2} />
      </TopCars.CarsContainer>
    </TopCars>
  );
}
