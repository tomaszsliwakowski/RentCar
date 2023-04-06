import React, { useState, useEffect } from "react";
import { Main, Panel } from "./index";
import {
  faSearch,
  faDollarSign,
  faChevronUp,
  faChevronDown,
  faFire,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainBook from "./book";
import CarContainer from "../../Home/car/car";

export default function MainContainer() {
  const [backendData, setBackendData] = useState([{}]);
  const [activeSelect, setActiveSelect] = useState(false);
  const [BookDate, setBookDate] = useState({});
  const [searchCar, setSearchCar] = useState("");
  const [PriceCar, setPriceCar] = useState("Popular");

  useEffect(() => {
    getDataFromDatabase();
  }, []);

  const getDataFromDatabase = () => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  };

  const clearSearchInput = () => {
    setSearchCar("");
  };

  const SearchInputHandler = (e) => {
    setSearchCar(e.target.value);
    setPriceCar("Popular");
    PanelOptSort("Popular");
  };

  const PanelOptSort = (opt) => {
    if (searchCar === "" && opt === "Highest") {
      setBackendData(
        backendData.sort(function (a, b) {
          return b.dailyPrice - a.dailyPrice;
        })
      );
    } else if (searchCar === "" && opt === "Lowest") {
      setBackendData(
        backendData.sort(function (a, b) {
          return a.dailyPrice - b.dailyPrice;
        })
      );
    } else if (opt === "Popular") {
      getDataFromDatabase();
    }
  };

  const SelectSortPrice = (opt) => {
    setPriceCar(opt);
    setActiveSelect(false);
    PanelOptSort(opt);
  };
  useEffect(() => {
    const close = (e) => {
      if (e.target.type !== "checkbox") {
        setActiveSelect(false);
      }
    };
    document.body.addEventListener("click", close);
    return () => {
      document.body.removeEventListener("click", close);
    };
  }, []);

  return (
    <Main>
      <Panel>
        <Panel.SearchContainer>
          <Panel.Search>
            <FontAwesomeIcon icon={faSearch} />
            <Panel.SearchInput
              type="text"
              placeholder="Search..."
              value={searchCar}
              onChange={(e) => {
                SearchInputHandler(e);
              }}
            />
          </Panel.Search>
        </Panel.SearchContainer>
        <Panel.DateContainer>
          <MainBook setBookDate={setBookDate} activeSelect={activeSelect} />
        </Panel.DateContainer>
        <Panel.PriceContainer>
          <Panel.Select>
            <Panel.OptionsBtn
              type="checkbox"
              checked={activeSelect}
              onChange={() => setActiveSelect((prev) => !prev)}
              onClick={() => clearSearchInput()}
            />
            <Panel.SelectBtn>
              <Panel.SelectedValue>
                <Panel.Text>
                  {PriceCar === "Popular" ? (
                    <FontAwesomeIcon icon={faFire} style={{ color: "red" }} />
                  ) : (
                    <FontAwesomeIcon
                      icon={faDollarSign}
                      style={{ color: "green" }}
                    />
                  )}
                  {PriceCar}
                </Panel.Text>
              </Panel.SelectedValue>
              <Panel.Icon>
                <FontAwesomeIcon icon={faChevronUp} />
                <FontAwesomeIcon icon={faChevronDown} />
              </Panel.Icon>
            </Panel.SelectBtn>
            {activeSelect ? (
              <Panel.Options>
                <Panel.Option onClick={() => SelectSortPrice("Popular")}>
                  <FontAwesomeIcon icon={faFire} />
                  <Panel.Text>Popular</Panel.Text>
                </Panel.Option>
                <Panel.Option onClick={() => SelectSortPrice("Highest")}>
                  <FontAwesomeIcon icon={faDollarSign} />
                  <Panel.Text>Highest price</Panel.Text>
                </Panel.Option>
                <Panel.Option onClick={() => SelectSortPrice("Lowest")}>
                  <FontAwesomeIcon icon={faDollarSign} />
                  <Panel.Text>Lowest price</Panel.Text>
                </Panel.Option>
              </Panel.Options>
            ) : null}
          </Panel.Select>
        </Panel.PriceContainer>
      </Panel>
      <Main.Section>
        {backendData.map((item, id) => (
          <CarContainer key={id} {...item} />
        ))}
      </Main.Section>
    </Main>
  );
}
