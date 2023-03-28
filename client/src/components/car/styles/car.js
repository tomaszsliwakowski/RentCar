import styled from "styled-components/macro";

export const CarContainer = styled.div`
  width: 16.5em;
  min-height: 23em;
  max-height: 23em;
  box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
  display: flex;
  padding: 0.75rem;
  padding-bottom: 1rem;
  margin: 0.25rem;
  background-color: #ffffff;
  flex-direction: column;
  align-items: center;
  border-radius: 0.375rem;
  margin-bottom: 1.5rem;

  @media (max-width: 300px) {
    padding: 0.75rem;
    margin-bottom: 1.5rem;
    width: 80%;
  }
  @media (min-width: 640px) {
    margin: 0.75rem;
  }
  @media (min-width: 768px) {
    margin: 1.5rem;
  }
`;

export const Thumbnail = styled.div`
  width: 100%;
  height: auto;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Name = styled.h3`
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  color: #000000;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 700;
`;

export const Prices = styled.div`
  display: flex;
  margin-top: 0.75rem;
  justify-content: flex-start;
  width: 100%;
`;

export const SmallText = styled.p`
  color: inherit;
  display: inline-flex;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 100;
`;

export const DailyPrice = styled.h5`
  color: #ef4444;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;
  margin: 0;
  margin-right: 0.75rem;
`;

export const MonthlyPrice = styled.h5`
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;
  margin: 0;
`;

export const SmallIcon = styled.span`
  margin-right: 0.25rem;
  color: #9ca3af;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

export const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Detail = styled.span`
  display: flex;
  align-items: center;
`;

export const Info = styled.h6`
  color: #9ca3af;
  font-size: 0.75rem;
  line-height: 1rem;
  margin: 0;
`;

export const Separator = styled.div`
  min-width: 100%;
  min-height: 1px;
  display: flex;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: #d1d5db;
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 10px 0;
  border-radius: 0.7em;
  background-color: #ef4444;
  color: white;
  border: none;
  transition: all 0.5s;
  font-weight: bold;
  margin-top: 1.25rem;
  min-width: 100%;
  &:hover {
    opacity: 0.9;
    box-shadow: 0 0 15px #ef4444;
  }
`;
