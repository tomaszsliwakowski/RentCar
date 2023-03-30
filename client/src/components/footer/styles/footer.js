import styled from "styled-components/macro";

export const Container = styled.div`
  //min-height: 24em;
  background-color: #1d2124;
  display: flex;
  padding-top: 2.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  @media (min-width: 768px) {
    padding-top: 4rem;
  }
`;
export const Inner = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1536px;
  height: 100%;
`;
export const Bottom = styled.div`
  display: flex;
  margin-top: 1.75rem;
  justify-content: center;
  width: 100%;
  max-width: 1536px;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    margin-top: 0.25rem;
    justify-content: flex-start;
  }
`;
export const CopyrightText = styled.small`
  font-size: 12px;
  color: #d1d5db;
`;
export const About = styled.div`
  display: flex;
  padding-right: 2.5rem;
  padding-left: 2.5rem;
  margin-right: 0.5rem;
  flex-direction: column;

  @media (min-width: 768px) {
    padding-right: 0.75rem;
    padding-right: 0.75rem;
    padding-left: 0.75rem;
    margin-right: 4rem;
  }
`;
export const AboutText = styled.p`
  margin-top: 0.5rem;
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 400;
  line-height: 1.25rem;
  max-width: 20rem;
`;
export const Section = styled.div`
  display: flex;
  padding-right: 2.5rem;
  padding-left: 2.5rem;
  margin-right: 0.5rem;
  margin-top: 1.75rem;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    margin-top: 0;
    padding-right: 0.75rem;
    padding-left: 0.75rem;
    margin-right: 4rem;
    width: auto;
  }
`;
export const LinksList = styled.ul`
  display: flex;
  list-style-type: none;
  flex-direction: column;
  outline: 0;
`;
export const ListItem = styled.li`
  margin-bottom: 0.75rem;
  transition-property: all;
  font-size: 0.875rem;
  line-height: 1.25rem;
  &:hover {
    color: #e5e7eb;
  }
  & a {
    text-decoration: none;
    color: white;
  }
`;
export const HeaderTitle = styled.h3`
  margin-bottom: 0.75rem;
  color: #ffffff;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
`;
export const Horizontal = styled.div`
  display: flex;
  align-items: center;
`;
export const RedIcon = styled.span`
  display: flex;
  margin-right: 0.5rem;
  background-color: #ef4444;
  color: #ffffff;
  font-size: 1rem;
  line-height: 1.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
`;
export const SmallText = styled.h6`
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const LogoText = styled.div`
  margin: 0.25rem;
  color: #000000;
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
  ${({ color }) => (color === "white" ? `color: #ffffff` : `color: #000000`)};
  @media (min-width: 768px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;
export const Image = styled.div`
  width: auto;
  height: 1.5rem;

  @media (min-width: 768px) {
    height: 2rem;
  }
  img {
    width: auto;
    height: 100%;
  }
`;
