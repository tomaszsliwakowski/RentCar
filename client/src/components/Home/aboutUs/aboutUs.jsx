import React from "react";
import AboutUs from "./index";
import JeepImg from "../../../assets/jeep.png";

export default function AboutUsContainer() {
  return (
    <AboutUs>
      <AboutUs.CarContainer>
        <img src={JeepImg} alt="Jeep" />
      </AboutUs.CarContainer>
      <AboutUs.InfoContainer>
        <AboutUs.Title>
          Feel The Best Experience With Our Rental Deals
        </AboutUs.Title>
        <AboutUs.InfoText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </AboutUs.InfoText>
      </AboutUs.InfoContainer>
    </AboutUs>
  );
}
