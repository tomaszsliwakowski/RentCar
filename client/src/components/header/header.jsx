import React from "react";
import Header from "./index";
import * as ROUTES from "../../Routes/Routes";

export default function HeaderContainer() {
  return (
    <Header>
      <Header.Group>
        <Header.Logo src={"./images/car-logo.png"} alt={"logo"} />
        <Header.LogoText to={ROUTES.Home}>YourCar</Header.LogoText>
      </Header.Group>
      <Header.Group>
        <Header.Link to={ROUTES.Home}>Home</Header.Link>
        <Header.Link to={ROUTES.Cars}>Cars</Header.Link>
        <Header.LinkContact href="#footer">Contact Us</Header.LinkContact>
      </Header.Group>
    </Header>
  );
}
