import React from "react";
import MclarenCarImg from "../../assets/mclaren-orange-big.png";
import BlobImg from "../../assets/blob.svg";
import TopSection from "./index";

export default function TopSectionContainer() {
  return (
    <TopSection>
      <TopSection.LeftContainer>
        <TopSection.Slogan>
          Rent The Best Qulity <br /> Car's With Us
        </TopSection.Slogan>
        <TopSection.Description>
          Always choose the best car from our local stores or order it remotely
          at the best price for you and get the best quality cars for as long as
          you like
        </TopSection.Description>
        <TopSection.ButtonsContainer>
          <TopSection.Button>Book Your Ride</TopSection.Button>
        </TopSection.ButtonsContainer>
      </TopSection.LeftContainer>
      <TopSection.RightContainer>
        <TopSection.BlobContainer>
          <img src={BlobImg} alt="blob" />
        </TopSection.BlobContainer>
        <TopSection.StandCar>
          <img src={MclarenCarImg} alt="Mclaren" />
        </TopSection.StandCar>
      </TopSection.RightContainer>
    </TopSection>
  );
}
