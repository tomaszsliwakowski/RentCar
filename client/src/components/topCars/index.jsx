import React from "react";
import {
  Container,
  Title,
  CarsContainer,
  EmptyCars,
  Loading,
} from "./styles/topCars";

export default function TopCars({ children }) {
  return <Container>{children}</Container>;
}

TopCars.Title = function TopCarsTitle({ children }) {
  return <Title>{children}</Title>;
};

TopCars.CarsContainer = function TopCarsContainer({ children }) {
  return <CarsContainer>{children}</CarsContainer>;
};

TopCars.EmptyCars = function TopCarsEmptyCars({ children }) {
  return <EmptyCars>{children}</EmptyCars>;
};

TopCars.LoadingContainer = function TopCarsLoadingContainer({ children }) {
  return <Loading>{children}</Loading>;
};
