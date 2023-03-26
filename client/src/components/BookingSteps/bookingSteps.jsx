import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCarSide,
  faCalendarDays,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import "react-calendar/dist/Calendar.css";
import BookingSteps from "./index";

export default function BookingStepsContainer() {
  return (
    <BookingSteps>
      <BookingSteps.Title>Our Working Steps</BookingSteps.Title>
      <BookingSteps.StepsContainer>
        <BookingSteps.StepContainer>
          <BookingSteps.Step>
            <BookingSteps.StepIcon>
              <FontAwesomeIcon icon={faMapLocationDot} />
            </BookingSteps.StepIcon>
          </BookingSteps.Step>
          <BookingSteps.StepTitle>Choose Location</BookingSteps.StepTitle>
          <BookingSteps.Desc>
            Find the nearest Yourcar point and book your car.
          </BookingSteps.Desc>
        </BookingSteps.StepContainer>
        <BookingSteps.StepContainer>
          <BookingSteps.Step>
            <BookingSteps.StepIcon>
              <FontAwesomeIcon icon={faCalendarDays} />
            </BookingSteps.StepIcon>
          </BookingSteps.Step>
          <BookingSteps.StepTitle>Pick-Up Date</BookingSteps.StepTitle>
          <BookingSteps.Desc>
            Pickup the Best Date to rent a car for you.
          </BookingSteps.Desc>
        </BookingSteps.StepContainer>
        <BookingSteps.StepContainer>
          <BookingSteps.Step>
            <BookingSteps.StepIcon>
              <FontAwesomeIcon icon={faCarSide} />
            </BookingSteps.StepIcon>
          </BookingSteps.Step>
          <BookingSteps.StepTitle>Book Your Car</BookingSteps.StepTitle>
          <BookingSteps.Desc>
            Book your nice car with ease in one single click
          </BookingSteps.Desc>
        </BookingSteps.StepContainer>
      </BookingSteps.StepsContainer>
    </BookingSteps>
  );
}
