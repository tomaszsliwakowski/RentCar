import React from "react";
import {
  LeftContainer,
  Item,
  Slogan,
  Desc,
  RightContainer,
  BlobContainer,
  StandCar,
  ButtonsContainer,
  BaseButton,
} from "./styles/topSection";

export default function TopSection({ children }) {
  return <Item>{children}</Item>;
}

TopSection.LeftContainer = function TopSectionLeftContainer({ children }) {
  return <LeftContainer>{children}</LeftContainer>;
};

TopSection.Slogan = function TopSectionSlogan({ children }) {
  return <Slogan>{children}</Slogan>;
};

TopSection.Description = function TopSectionDescription({ children }) {
  return <Desc>{children}</Desc>;
};

TopSection.RightContainer = function TopSectionRightContainer({ children }) {
  return <RightContainer>{children}</RightContainer>;
};

TopSection.BlobContainer = function TopSectionBlobConatiner({ children }) {
  return <BlobContainer>{children}</BlobContainer>;
};

TopSection.StandCar = function TopSectionStandCar({ children }) {
  return <StandCar>{children}</StandCar>;
};
TopSection.ButtonsContainer = function TopSectionButtonsConatiner({
  children,
}) {
  return <ButtonsContainer>{children}</ButtonsContainer>;
};

TopSection.Button = function TopSectionButton({ children, ...restprops }) {
  return <BaseButton {...restprops}>{children}</BaseButton>;
};
