import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 8em 0;
`;

export const Title = styled.h2`
  color: #000000;
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 800;
`;

export const StepsContainer = styled.div`
  display: flex;
  margin-top: 1.75rem;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const StepContainer = styled.div`
  display: flex;
  margin: 0.75rem;
  transition-property: background-color, border-color, color, fill, stroke;
  flex-direction: column;
  align-items: center;

  &:hover {
    color: red;
  }
`;

export const Step = styled.div`
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  display: flex;
  padding: 1.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
`;

export const StepTitle = styled.h4`
  margin-top: 1rem;
  color: #000000;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 600;
`;

export const Desc = styled.p`
  color: #4b5563;
  font-size: 0.75rem;
  line-height: 1rem;
  text-align: center;
  width: 83.333333%;
`;

export const StepIcon = styled.span`
  color: #ef4444;
  font-size: 1.875rem;
  line-height: 2.25rem;
`;
