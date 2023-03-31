import styled from "styled-components/macro";

export const AboutUsContainer = styled.div`
  display: flex;
  padding-right: 0;
  padding-left: 0;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #ffffff;
  margin-top: 5em;
  margin-bottom: 5em;
`;
export const CarContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -50px;
  img {
    width: auto;
    height: 100%;
  }
  @media (max-width: 768px) {
    margin: 0 auto;
  }
  @media (min-width: 768px) {
    height: 28em;
  }
  @media (min-width: 1024px) {
    height: 30em;
  }
  @media (min-width: 1536px) {
    height: 35em;
    margin-left: 0;
  }
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    margin-left: 1.5rem;
    width: 50%;
  }

  @media (min-width: 1536px) {
    margin-left: 4rem;
  }
`;
export const InfoText = styled.p`
  margin-top: 1rem;
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 400;
  word-wrap: break-word;
  overflow: hidden;
  width: fit-content;
  @media (min-width: 768px) {
    line-height: 1.5;
    font-size: 1rem;
    max-width: 42rem;
  }
  @media (max-width: 768px) {
    line-height: 1.5;
    font-size: 1rem;
    padding: 0 2rem;
  }
`;
export const Title = styled.h1`
  color: #000000;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 800;
  word-wrap: break-word;
  @media (min-width: 768px) {
    line-height: 1.5;
    font-weight: 800;
    font-size: 3rem;
  }
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;
