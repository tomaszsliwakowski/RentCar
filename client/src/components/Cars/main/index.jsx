import React from "react";
import { Container, PanelContainer, Section } from "./styles/main";

export function Main({ children }) {
  return <Container>{children}</Container>;
}

Main.Section = function MainSection({ children }) {
  return <Section>{children}</Section>;
};

export function Panel({ children }) {
  return <PanelContainer>{children}</PanelContainer>;
}
