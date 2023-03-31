import React from "react";
import {
  AboutUsContainer,
  CarContainer,
  InfoContainer,
  InfoText,
  Title,
} from "./styles/aboutUs";

export default function AboutUs({ children }) {
  return <AboutUsContainer>{children}</AboutUsContainer>;
}

AboutUs.CarContainer = function AboutUsCarContainer({ children }) {
  return <CarContainer>{children}</CarContainer>;
};

AboutUs.InfoContainer = function AboutUsInfoContainer({ children }) {
  return <InfoContainer>{children}</InfoContainer>;
};

AboutUs.Title = function AboutUsTitle({ children }) {
  return <Title>{children}</Title>;
};

AboutUs.InfoText = function AboutUsInfoText({ children }) {
  return <InfoText>{children}</InfoText>;
};
