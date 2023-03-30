import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Footer, Logo } from "./index";
import * as ROUTES from "../../Routes/Routes";
import { Link } from "react-router-dom";
import CarLogoImg from "../../assets/car-logo.png";
import CarLogoDarkImg from "../../assets/car-logo-dark.png";

export default function FooterContainer() {
  return (
    <Footer>
      <Footer.InnerContainer>
        <Footer.AboutContainer>
          <LogoCon color="white" bgColor="dark" />
          <Footer.AboutText>
            Yourcar is a Car renting and selling company located in many
            countries across the world which has high quality cars and top rated
            service.
          </Footer.AboutText>
        </Footer.AboutContainer>
        <Footer.SectionContainer>
          <Footer.HeaderTitle>Our Links</Footer.HeaderTitle>
          <Footer.LinksList>
            <Footer.ListItem>
              <Link to={ROUTES.Home}>Home</Link>
            </Footer.ListItem>
            <Footer.ListItem>
              <Link to={ROUTES.Home}>About Us</Link>
            </Footer.ListItem>
            <Footer.ListItem>
              <Link to={ROUTES.Cars}>Models</Link>
            </Footer.ListItem>
          </Footer.LinksList>
        </Footer.SectionContainer>
        <Footer.SectionContainer>
          <Footer.HeaderTitle>Other Links</Footer.HeaderTitle>
          <Footer.LinksList>
            <Footer.ListItem>
              <a href="#">FAQ</a>
            </Footer.ListItem>
            <Footer.ListItem>
              <a href="#">Contact Us</a>
            </Footer.ListItem>
            <Footer.ListItem>
              <a href="#">Support</a>
            </Footer.ListItem>
            <Footer.ListItem>
              <a href="#">Privacy Policy</a>
            </Footer.ListItem>
            <Footer.ListItem>
              <a href="#">Terms &amp; Conditions</a>
            </Footer.ListItem>
          </Footer.LinksList>
        </Footer.SectionContainer>
        <Footer.SectionContainer>
          <Footer.HeaderTitle>Call Now</Footer.HeaderTitle>
          <Footer.HorizontalContainer>
            <Footer.RedIcon>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </Footer.RedIcon>
            <Footer.SmallText>+91 555-234-8469</Footer.SmallText>
          </Footer.HorizontalContainer>
        </Footer.SectionContainer>
        <Footer.SectionContainer>
          <Footer.HeaderTitle>Mail</Footer.HeaderTitle>
          <Footer.HorizontalContainer>
            <Footer.RedIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </Footer.RedIcon>
            <Footer.SmallText>info@yourcar.com</Footer.SmallText>
          </Footer.HorizontalContainer>
        </Footer.SectionContainer>
      </Footer.InnerContainer>
      <Footer.BottomContainer>
        <Footer.CopyrightText>
          Copyright &copy; {new Date().getFullYear()} Yourcar. All rights
          reserved.
        </Footer.CopyrightText>
      </Footer.BottomContainer>
    </Footer>
  );
}

function LogoCon(props) {
  const { color, bgColor } = props;

  return (
    <Logo>
      <Logo.Image>
        <img
          src={bgColor === "dark" ? CarLogoDarkImg : CarLogoImg}
          alt="Logo"
        />
      </Logo.Image>
      <Logo.LogoText color={color === "white" ? "white" : "black"}>
        Yourcar.
      </Logo.LogoText>
    </Logo>
  );
}
