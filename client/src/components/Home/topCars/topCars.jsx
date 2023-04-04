import React from "react";
import TopCars from "./index";
import CarContainer from "../car/car";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

export default function TopCarsContainer() {
  const [backendData, setBackendData] = useState([{}]);
  const [current, setcurrent] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: "640px" });
  const isMediumSize = useMediaQuery({ maxWidth: "900px" });

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data.splice(0, 4));
      });
  }, []);

  const cars = [
    ...backendData.map((item, id) => <CarContainer key={id} {...item} />),
  ];

  console.log(cars);
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
