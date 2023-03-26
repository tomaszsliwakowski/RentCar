import React from "react";
import {
  Container,
  Title,
  StepsContainer,
  StepContainer,
  Step,
  StepIcon,
  StepTitle,
  Desc,
} from "./styles/bookingSteps";

export default function BookingSteps({ children }) {
  return <Container>{children}</Container>;
}

BookingSteps.Title = function BookingStepsTitle({ children }) {
  return <Title>{children}</Title>;
};

BookingSteps.StepsContainer = function BookingStepsContainer({ children }) {
  return <StepsContainer>{children}</StepsContainer>;
};

BookingSteps.StepContainer = function BookingStepsStepContainer({ children }) {
  return <StepContainer>{children}</StepContainer>;
};

BookingSteps.Step = function BookingStepsStep({ children }) {
  return <Step>{children}</Step>;
};

BookingSteps.StepIcon = function BookingStepsStepIcon({ children }) {
  return <StepIcon>{children}</StepIcon>;
};

BookingSteps.StepTitle = function BookingStepsStepTitle({ children }) {
  return <StepTitle>{children}</StepTitle>;
};

BookingSteps.Desc = function BookingStepsDesc({ children }) {
  return <Desc>{children}</Desc>;
};
