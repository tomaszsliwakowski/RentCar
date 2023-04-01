import React from "react";
import HeaderContainer from "../components/header/header";
import FooterContainer from "../components/footer/footer";
import CarsTopSection from "../components/Cars/topSection/topSection";
import MainContainer from "../components/Cars/main/main";

export default function CarsPage() {
  return (
    <>
      <HeaderContainer />
      <CarsTopSection />
      <MainContainer />
      <FooterContainer />
    </>
  );
}
