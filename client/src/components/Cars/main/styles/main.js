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
  background-color: white;
  margin-top: 1.5rem;
  z-index: 12;
  box-shadow: 0 0 15px silver;
  flex-wrap: wrap;
  @media (max-width: 1000px) {
    padding: 20px 0;
    justify-content: center;
  }
`;
export const Section = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 1536px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  margin-bottom: 4rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const SearchContainer = styled.div`
  background-color: white;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 64px;
  min-width: 250px;
  max-width: 300px;
  @media screen and (min-width: 1000px) {
    padding: 1rem 0;
  }
  @media (min-width: 520px) {
    margin-left: 20px;
  }
`;
export const DateContainer = styled.div`
  background-color: white;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 64px;
  min-width: 250px;
  max-width: 300px;
  z-index: 22;
  @media screen and (min-width: 1000px) {
    padding: 1rem 0;
  }
`;
export const PriceContainer = styled.div`
  padding-left: 0;
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 64px;
  min-width: 250px;
  max-width: 250px;
  @media screen and (min-width: 1000px) {
    padding: 1rem 0;
  }
  @media (min-width: 900px) {
    justify-content: flex-start;
    padding-left: 2rem;
  }
`;

export const Search = styled.div`
  background-color: white;
  border: 1px solid silver;
  padding: 0px 10px;
  height: 30px;
  border-radius: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  & svg {
    color: #ef4444;
  }
`;
export const SearchInput = styled.input`
  height: 100%;
  width: 90%;
  padding: 0 5px;
  border: none;
  background-color: transparent;
  outline: none;
  color: black;
  &::placeholder {
    color: black;
  }
`;

export const Select = styled.div`
  width: 100%;
  height: 30px;
  max-width: 180px;
  background-color: white;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0px 0;
  border: 1px solid silver;
`;
export const OptionsInput = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 3;
  width: 100%;
  height: 100%;
`;
export const SelectBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 15px;
`;
export const SelectValue = styled.div``;
export const Text = styled.div`
  font-size: 16px;
  & svg {
    margin-right: 5px;
  }
`;
export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  & svg {
    color: #ef4444;
  }
`;
export const Options = styled.div`
  position: absolute;
  background-color: white;
  top: 2.2rem;
  width: 100%;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid silver;
`;
export const Option = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  width: 100%;
  padding: 10px 0px;
  transition: all 0.3s;
  cursor: pointer;
  & svg {
    padding-left: 20px;
    color: green;
  }
  &:first-child svg {
    color: red;
  }

  &:hover {
    background-color: silver;
    border-radius: 1rem;
  }
`;

export const DateReset = styled.p`
  color: #ef4444;
  margin-left: 10px;
  cursor: pointer;
`;
