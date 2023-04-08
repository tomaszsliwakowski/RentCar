import React, { useState, useEffect } from "react";
import { Main, Panel } from "./index";
import BeatLoader from "react-spinners/BeatLoader";
import {
  faSearch,
  faDollarSign,
  faChevronUp,
  faChevronDown,
  faFire,
  faRepeat,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainBook from "./book";
import CarContainer from "../../Home/car/car";

export default function MainContainer() {
  const [backendData, setBackendData] = useState([{}]);
  const [activeSelect, setActiveSelect] = useState(false);
  const [activeDate, setActiveDate] = useState(false);
  const [BookDate, setBookDate] = useState({});
  const [searchCar, setSearchCar] = useState("");
  const [PriceCar, setPriceCar] = useState("Popular");

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
    margin: "5rem 0",
  };

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  const clearSearchInput = () => {
    setSearchCar("");
  };
  const ClearInputAndOpt = () => {
    setSearchCar("");
    setPriceCar("Popular");
  };

  const SearchInputHandler = (e) => {
    setSearchCar(e.target.value);
    setPriceCar("Popular");
    ResetDate();
    setActiveDate((prev) => !prev);
  };

  const ResetDate = () => {
    setBookDate({
      start: new Date(),
      return: new Date(),
    });
  };

  function sortPostHighest(a, b) {
    return b.dailyPrice - a.dailyPrice;
  }
  function sortPostLowest(a, b) {
    return a.dailyPrice - b.dailyPrice;
  }

  const PanelOptSort = () => {
    const backendSort = [...backendData];
    if (searchCar === "" && PriceCar === "Highest") {
      return backendSort.sort(sortPostHighest);
    } else if (searchCar === "" && PriceCar === "Lowest") {
      return backendSort.sort(sortPostLowest);
    } else if (searchCar !== "") {
      return backendSort.filter((item) =>
        item.name.toLowerCase().includes(searchCar.toLowerCase())
      );
    } else if (PriceCar === "Popular" && searchCar === "") {
      return backendData;
    }
  };

  const SelectSortPrice = (opt) => {
    setPriceCar(opt);
    setActiveSelect(false);
    PanelOptSort(opt);
    ResetDate();
    clearSearchInput();
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

  const PostShow = PanelOptSort();

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
          <MainBook
            setBookDate={setBookDate}
            activeSelect={activeSelect}
            BookDate={BookDate}
            ClearInputAndOpt={ClearInputAndOpt}
            activeDate={activeDate}
          />
          <Panel.DateReset>
            <FontAwesomeIcon icon={faRepeat} onClick={() => ResetDate()} />
          </Panel.DateReset>
        </Panel.DateContainer>
        <Panel.PriceContainer>
          <Panel.Select>
            <Panel.OptionsBtn
              type="checkbox"
              checked={activeSelect}
              onChange={() => setActiveSelect((prev) => !prev)}
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
        {PostShow.length > 1 ? (
          PostShow.map((item, id) => <CarContainer key={id} {...item} />)
        ) : (
          <BeatLoader
            color={"#ef4444"}
            loading={true}
            cssOverride={override}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        )}
      </Main.Section>
    </Main>
  );
}
