import React from "react";
import HeaderContainer from "../components/header/header";
import TopSectionContainer from "../components/topSection/topSection";
import BookCardContainer from "../components/bookCard/bookCard";
import BookingStepsContainer from "../components/BookingSteps/bookingSteps";

export default function HomePage() {
  return (
    <>
      <HeaderContainer />
      <TopSectionContainer />
      <BookCardContainer />
      <BookingStepsContainer />
    </>
  );
}
