import React, { useState } from "react";
import { Main, Panel } from "./index";
import {
  faSearch,
  faDollarSign,
  faChevronUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainBook from "./book";

export default function MainContainer() {
  const [activeSelect, setActiveSelect] = useState(false);
  return (
    <Main>
      <Panel>
        <Panel.SearchContainer>
          <Panel.Search>
            <FontAwesomeIcon icon={faSearch} />
            <Panel.SearchInput type="text" placeholder="Search..." />
          </Panel.Search>
        </Panel.SearchContainer>
        <Panel.DateContainer>
          <MainBook />
        </Panel.DateContainer>
        <Panel.PriceContainer>
          <Panel.Select activeSelect>
            <Panel.OptionsBtn
              type="checkbox"
              checked={activeSelect}
              onChange={() => setActiveSelect((prev) => !prev)}
            />
            <Panel.SelectBtn>
              <Panel.SelectedValue>
                <Panel.Text>Select</Panel.Text>
              </Panel.SelectedValue>
              <Panel.Icon>
                <FontAwesomeIcon icon={faChevronUp} />
                <FontAwesomeIcon icon={faChevronDown} />
              </Panel.Icon>
            </Panel.SelectBtn>
            {activeSelect ? (
              <Panel.Options>
                <Panel.Option>
                  <FontAwesomeIcon icon={faDollarSign} />
                  <Panel.Text>Highest</Panel.Text>
                </Panel.Option>
                <Panel.Option>
                  <FontAwesomeIcon icon={faDollarSign} />
                  <Panel.Text>Lowest</Panel.Text>
                </Panel.Option>
              </Panel.Options>
            ) : null}
          </Panel.Select>
        </Panel.PriceContainer>
      </Panel>
      <Main.Section></Main.Section>
    </Main>
  );
}
