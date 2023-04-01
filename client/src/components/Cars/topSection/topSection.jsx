import React from "react";
import TopSection from "./index";
import CarIMG from "../../../assets/porche.png";

export default function CarsTopSection() {
  return (
    <TopSection>
      <TopSection.LeftSite>
        <TopSection.Slogan>
          Choose And Rent Your Favorite Car With Us
        </TopSection.Slogan>
      </TopSection.LeftSite>
      <TopSection.RightSite>
        <TopSection.StandCar>
          <img src={CarIMG} alt="Porsche" />
        </TopSection.StandCar>
      </TopSection.RightSite>
    </TopSection>
  );
}
