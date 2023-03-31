import React from "react";
import TopCars from "./index";
import CarContainer from "../car/car";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

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
  const [current, setcurrent] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: "640px" });
  const isMediumSize = useMediaQuery({ maxWidth: "900px" });

  const cars = [
    <CarContainer {...testCar} />,
    <CarContainer {...testCar2} />,
    <CarContainer {...testCar} />,
    <CarContainer {...testCar2} />,
  ];
  const numberOfDots = isMobile
    ? cars.length
    : isMediumSize
    ? cars.length - 1
    : cars.length / 2;
  return (
    <TopCars>
      <TopCars.Title>Explore Our Top Deals</TopCars.Title>
      <TopCars.CarsContainer>
        <Carousel
          value={current}
          onChange={setcurrent}
          slides={cars}
          plugins={[
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3,
              },
            },
          ]}
          breakpoints={{
            640: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
              ],
            },
            900: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ],
            },
          }}
        />
        <Dots value={current} onChange={setcurrent} number={numberOfDots} />
      </TopCars.CarsContainer>
    </TopCars>
  );
}
