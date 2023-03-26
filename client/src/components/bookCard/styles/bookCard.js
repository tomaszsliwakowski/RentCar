import styled from "styled-components/macro";
import Calendar from "react-calendar";

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5em 1em;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  border-radius: 0.375rem;
  width: 450px;
  margin: 0 auto;
  box-shadow: 0 0 15px silver;
  @media (max-width: 640px) {
    width: fit-content;
    flex-direction: column;
    gap: 10px;
    padding: 1em;
    margin: 0 auto;
  }
  @media (min-width: 768px) {
    margin: 5em auto;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  position: relative;
`;

export const Icon = styled.span`
  margin-right: 0.25rem;
  color: #ef4444;
  font-size: 0.75rem;
  line-height: 1rem;
  fill: currentColor;
`;

export const SmallIcon = styled.span`
  margin-left: 0.25rem;
  color: #6b7280;
  font-size: 0.75rem;
  line-height: 1rem;
  fill: currentColor;
`;

export const Name = styled.span`
  color: #4b5563;
  font-size: 0.75rem;
  line-height: 1rem;
  cursor: pointer;
  user-select: none;
`;

export const LineSeperator = styled.span`
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  background-color: #d1d5db;
`;

export const DateCalendar = styled(Calendar)`
  position: absolute;
  max-width: none;
  user-select: none;
  top: 2.5em;
  left: 0;
  border-radius: 1em;
  ${({ offset }) => (offset ? "left: 6em" : "0em")};
  @media (max-width: 350px) {
    left: -5.5em;
    top: 8em;
    width: 270px;
  }
  @media (min-width: 350px) {
    left: -7.2em;
    top: 9em;
    width: 340px;
  }
  @media (min-width: 640px) {
    left: -4em;
    top: 3em;
    width: 340px;
  }
  @media (min-width: 1024px) {
    top: 3.5em;
    left: -2em;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  width: 12em;
  height: 3.5em;
  border-radius: 0.7em;
  background-color: #ef4444;
  color: white;
  border: none;
  transition: all 0.5s;
  font-weight: bold;
  &:hover {
    opacity: 0.9;
    box-shadow: 0 0 15px #ef4444;
  }
`;

export const HorizontalMargin = styled.span`
  display: flex;
  min-width: ${({ margin }) =>
    typeof margin === "string" ? margin : `${margin}px`};
`;
export const VerticalMargin = styled.span`
  display: flex;
  min-height: ${({ margin }) =>
    typeof margin === "string" ? margin : `${margin}px`};
`;
