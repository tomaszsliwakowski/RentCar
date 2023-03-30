import React from "react";
import HeaderContainer from "../components/header/header";
import TopSectionContainer from "../components/topSection/topSection";
import BookCardContainer from "../components/bookCard/bookCard";
import BookingStepsContainer from "../components/BookingSteps/bookingSteps";
import AboutUsContainer from "../components/aboutUs/aboutUs";
import TopCarsContainer from "../components/topCars/topCars";
import FooterContainer from "../components/footer/footer";

export default function HomePage() {
  return (
    <>
      <HeaderContainer />
      <TopSectionContainer />
      <BookCardContainer />
      <BookingStepsContainer />
      <AboutUsContainer />
      <TopCarsContainer />
      <FooterContainer />
    </>
  );
}
