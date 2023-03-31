import React from "react";
import TopSection from "./index";
import CarIMG from "../../../assets/porche.png";

export default function CarsTopSection() {
  return (
    <TopSection>
      <TopSection.LeftSite>
        <TopSection.Slogan>Choose and rent your favorite car</TopSection.Slogan>
      </TopSection.LeftSite>
      <TopSection.RightSite>
        <img src={CarIMG} alt="Porsche" />
      </TopSection.RightSite>
    </TopSection>
  );
}
