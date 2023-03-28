import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  padding-right: 0;
  padding-left: 0;
  margin-bottom: 15rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto 15rem auto;

  @media (min-width: 768px) {
    padding-right: 0;
    padding-left: 0;
  }
`;
export const Title = styled.h2`
  color: #000000;
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 800;

  @media (min-width: 1024px) {
    font-size: 3rem;
    line-height: 1;
  }
`;
export const CarsContainer = styled.div`
  display: flex;
  margin-top: 1.75rem;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;

  @media (min-width: 768px) {
    margin-top: 2.5rem;
  }
`;
export const EmptyCars = styled.div`
  display: flex;
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.25rem;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const Loading = styled.div`
  display: flex;
  margin-top: 2.25rem;
  color: #000000;
  font-size: 1rem;
  line-height: 1.5rem;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
