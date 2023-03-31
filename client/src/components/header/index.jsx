import React from "react";
import { Item, Group, Logo, LogoText, Link, Contact } from "./styles/header";

export default function Header({ children }) {
  return <Item>{children}</Item>;
}

Header.Group = function HeaderGroup({ children }) {
  return <Group>{children}</Group>;
};

Header.Logo = function HeaderLogo({ ...restprops }) {
  return <Logo {...restprops} />;
};

Header.LogoText = function HeaderLogo({ children, ...restprops }) {
  return <LogoText {...restprops}>{children}</LogoText>;
};

Header.Link = function HeaderLink({ children, ...restprops }) {
  return <Link {...restprops}>{children}</Link>;
};

Header.LinkContact = function HeaderLinkContact({ children, ...restprops }) {
  return <Contact {...restprops}>{children}</Contact>;
};
