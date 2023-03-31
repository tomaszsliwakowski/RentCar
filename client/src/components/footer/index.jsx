import React from "react";
import {
  Container,
  Inner,
  Bottom,
  CopyrightText,
  About,
  AboutText,
  Section,
  LinksList,
  ListItem,
  HeaderTitle,
  Horizontal,
  RedIcon,
  SmallText,
  LogoContainer,
  Image,
  LogoText,
} from "./styles/footer";

export function Footer({ children, ...restprops }) {
  return <Container {...restprops}>{children}</Container>;
}

Footer.InnerContainer = function FooterInnerContainer({ children }) {
  return <Inner>{children}</Inner>;
};

Footer.BottomContainer = function FooterBottomContainer({ children }) {
  return <Bottom>{children}</Bottom>;
};

Footer.CopyrightText = function FooterCopyrightText({ children }) {
  return <CopyrightText>{children}</CopyrightText>;
};

Footer.AboutContainer = function FooterAboutContainer({ children }) {
  return <About>{children}</About>;
};

Footer.AboutText = function FooterAboutText({ children }) {
  return <AboutText>{children}</AboutText>;
};

Footer.SectionContainer = function FooterSectionContainer({ children }) {
  return <Section>{children}</Section>;
};

Footer.LinksList = function FooterLinksList({ children }) {
  return <LinksList>{children}</LinksList>;
};

Footer.ListItem = function FooterListItem({ children }) {
  return <ListItem>{children}</ListItem>;
};

Footer.HeaderTitle = function FooterHeaderTitle({ children }) {
  return <HeaderTitle>{children}</HeaderTitle>;
};

Footer.HorizontalContainer = function FooterHorizontalContainer({ children }) {
  return <Horizontal>{children}</Horizontal>;
};

Footer.RedIcon = function FooterRedIcon({ children }) {
  return <RedIcon>{children}</RedIcon>;
};

Footer.SmallText = function FooterSmallText({ children }) {
  return <SmallText>{children}</SmallText>;
};

export function Logo({ children }) {
  return <LogoContainer>{children}</LogoContainer>;
}

Logo.Image = function LogoImage({ children }) {
  return <Image>{children}</Image>;
};

Logo.LogoText = function LogoLogoText({ children, ...restprops }) {
  return <LogoText {...restprops}>{children}</LogoText>;
};
