import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 1536px;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  gap: 2rem;
  @media (min-width: 768px) {
    gap: 3rem;
  }
`;
export const PanelContainer = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 1536px;
  margin-left: auto;
  margin-right: auto;
  background-color: blue;
  min-height: 10vh;
  margin-top: 1rem;
`;
export const Section = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 1536px;
  margin-left: auto;
  margin-right: auto;
  background-color: lightgreen;
  min-height: 50vh;
  margin-bottom: 4rem;
`;
