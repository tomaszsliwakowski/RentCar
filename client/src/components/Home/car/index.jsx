import React from "react";
import {
  CarContainer,
  Thumbnail,
  Name,
  Prices,
  SmallText,
  SmallIcon,
  DailyPrice,
  MonthlyPrice,
  DetailsContainer,
  Detail,
  Info,
  Separator,
  Button,
} from "./styles/car";

export default function Car({ children }) {
  return <CarContainer>{children}</CarContainer>;
}

Car.Thumbnail = function CarThumbnail({ children }) {
  return <Thumbnail>{children}</Thumbnail>;
};

Car.Name = function CarName({ children }) {
  return <Name>{children}</Name>;
};

Car.Prices = function CarPrices({ children }) {
  return <Prices>{children}</Prices>;
};

Car.SmallText = function CarSmallText({ children }) {
  return <SmallText>{children}</SmallText>;
};

Car.DailyPrice = function CarDailyPrice({ children }) {
  return <DailyPrice>{children}</DailyPrice>;
};

Car.MonthlyPrice = function CarMonthlyPrice({ children }) {
  return <MonthlyPrice>{children}</MonthlyPrice>;
};

Car.SmallIcon = function CarSmallIcon({ children }) {
  return <SmallIcon>{children}</SmallIcon>;
};

Car.CarDetailsContainer = function CarDetailsContainer({ children }) {
  return <DetailsContainer>{children}</DetailsContainer>;
};

Car.Detail = function CarDetail({ children }) {
  return <Detail>{children}</Detail>;
};

Car.Info = function CarInfo({ children }) {
  return <Info>{children}</Info>;
};

Car.Separator = function CarSeparator({ children }) {
  return <Separator>{children}</Separator>;
};

Car.Button = function CarButton({ children }) {
  return <Button>{children}</Button>;
};
