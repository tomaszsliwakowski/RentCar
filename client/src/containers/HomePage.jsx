import React from "react";
import HeaderContainer from "../components/header/header";
import TopSectionContainer from "../components/Home/topSection/topSection";
import BookCardContainer from "../components/Home/bookCard/bookCard";
import BookingStepsContainer from "../components/Home/BookingSteps/bookingSteps";
import AboutUsContainer from "../components/Home/aboutUs/aboutUs";
import TopCarsContainer from "../components/Home/topCars/topCars";
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
