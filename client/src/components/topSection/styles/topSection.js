import styled from "styled-components/macro";

export const Item = styled.div`
  min-height: 400px;
  margin-top: 6em;
  display: flex;
  padding-right: 20px;
  padding-left: 20px;
  justify-content: space-between;
  width: 100%;
  max-width: 1536px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 1024px) {
    padding-right: 3rem;
  }
`;
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
export const Slogan = styled.h1`
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  margin-bottom: 1rem;
  color: #000000;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  letter-spacing: 4px;

  @media (min-width: 640px) {
    line-height: 1.625;
    font-size: 2rem;
  }
  @media (min-width: 768px) {
    line-height: 1.625;
    font-size: 2.5rem;
  }
  @media (min-width: 1024px) {
    line-height: 1.625;
    font-size: 3.5rem;
  }
  @media (min-width: 1280px) {
    line-height: 1.625;
    font-size: 3.8rem;
  }
`;
export const Desc = styled.p`
  overflow: hidden;
  color: #1f2937;
  font-size: 0.8rem;
  word-wrap: break-word;

  @media (min-width: 640px) {
    font-size: 1.2rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1280px) {
    font-size: 2.2rem;
  }
`;
export const RightContainer = styled.div`
  display: flex;
  position: relative;
  margin-top: 5rem;
  flex-direction: column;
  width: 50%;
`;
export const BlobContainer = styled.div`
  width: 20em;
  height: 10em;
  position: absolute;
  right: -5em;
  top: -9em;
  z-index: -1;
  transform: rotate(-30deg);
  img {
    width: 100%;
    height: auto;
    max-height: max-content;
  }
  @media (min-width: 640px) {
    width: 40em;
    max-height: 10em;
    right: -9em;
    top: -16em;
    transform: rotate(-25deg);
  }
  @media (min-width: 1024px) {
    width: 50em;
    max-height: 30em;
    right: -7em;
    top: -15em;
    transform: rotate(-30deg);
  }
  @media (min-width: 1280px) {
    width: 70em;
    max-height: 30em;
    right: -15em;
    top: -25em;
    transform: rotate(-20deg);
  }
`;

export const StandCar = styled.div`
  width: auto;
  height: 10em;
  right: -6em;
  top: -5em;
  position: absolute;
  img {
    width: auto;
    height: 100%;
    max-width: fit-content;
  }
  @media (min-width: 640px) {
    height: 16em;
    right: -6em;
    top: -6em;
  }
  @media (min-width: 1024px) {
    height: 21em;
    right: -8em;
    top: -5em;
  }
  @media (min-width: 1280px) {
    height: 30em;
    right: -13em;
    top: -9em;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  flex-wrap: wrap;
`;
export const BaseButton = styled.button`
  cursor: pointer;
  width: 12em;
  height: 3.5em;
  border-radius: 0.7em;
  font-weight: bold;
  background-color: #ef4444;
  color: white;
  border: none;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.02);
  }
`;
