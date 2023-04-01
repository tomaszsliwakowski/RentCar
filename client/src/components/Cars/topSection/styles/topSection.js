import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  justify-content: space-between;
  width: 100%;
  max-width: 1536px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3rem;
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;
export const Left = styled.div`
  padding-left: 20px;
  width: 100%;
`;
export const Right = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding-right: 20px;
`;
export const StandCar = styled.div`
  position: absolute;
  width: auto;
  height: 7em;
  right: -7em;
  top: 1em;
  img {
    width: auto;
    height: 100%;
    max-width: fit-content;
  }

  @media (min-width: 350px) {
    width: auto;
    height: 8em;
    right: -6em;
    top: 1em;
  }
  @media (min-width: 400px) {
    height: 8em;
    right: -5em;
    top: 1em;
  }
  @media (min-width: 640px) {
    height: 12em;
    right: -5em;
    top: 2em;
  }
  @media (min-width: 1024px) {
    height: 12em;
    right: 0em;
    top: 5em;
  }
  @media (min-width: 1280px) {
    height: 15em;
    right: 0em;
    top: 3em;
  }
`;
export const Slogan = styled.h1`
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
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
    margin-top: 3rem;
  }
  @media (min-width: 768px) {
    line-height: 1.625;
    font-size: 2.5rem;
    margin-top: 3rem;
  }
  @media (min-width: 1024px) {
    line-height: 1.625;
    font-size: 3.5rem;
    margin-top: 4rem;
  }
  @media (min-width: 1280px) {
    line-height: 1.625;
    font-size: 3.8rem;
    margin-top: 4rem;
  }
`;
