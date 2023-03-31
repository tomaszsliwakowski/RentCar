import React from "react";
import { Container, Left, Right, StandCar, Slogan } from "./styles/topSection";

export default function TopSection({ children }) {
  return <Container>{children}</Container>;
}

TopSection.LeftSite = function TopSectionLeftSite({ children }) {
  return <Left>{children}</Left>;
};

TopSection.RightSite = function TopSectionRightSite({ children }) {
  return <Right>{children}</Right>;
};

TopSection.StandCar = function TopSectionStandCar({ children }) {
  return <StandCar>{children}</StandCar>;
};

TopSection.Slogan = function TopSectionSlogan({ children }) {
  return <Slogan>{children}</Slogan>;
};
