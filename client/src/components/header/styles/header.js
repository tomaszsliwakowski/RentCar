import styled from "styled-components/macro";
import { NavLink as LinkRouter } from "react-router-dom";

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 60px;
  width: 100%;
  max-width: 1536px;
  margin: 0 auto;
  background-color: transparent;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  &:last-of-type {
    gap: 20px;
  }
  @media screen and (max-width: 400px) {
    &:last-of-type {
      gap: 10px;
    }
    padding: 0 10px;
  }
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
`;
export const LogoText = styled(LinkRouter)`
  text-decoration: none;
  font-size: 20px;
  color: black;
  font-weight: bold;
  cursor: pointer;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  @media screen and (max-width: 400px) {
    font-size: 15px;
  }
`;

export const Link = styled(LinkRouter)`
  text-decoration: none;
  color: black;
  font-weight: bold;
  cursor: pointer;
  &.active {
    color: #ef4444;
  }
  &:hover {
    opacity: 0.7;
  }
  @media screen and (max-width: 400px) {
    font-size: 14px;
  }
  @media screen and (max-width: 300px) {
    font-size: 12px;
  }
`;
