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
  const [BookDate,setBookDate] = useState({})
 const [searchCar,setSearchCar]=useState("")
 const [priceCar,setPriceCar] = useState("")
 
const SelectSortPrice = (opt)=> {
  setPriceCar(opt)
  setActiveSelect(false)
}

 return (
    <Main>
      <Panel>
        <Panel.SearchContainer>
          <Panel.Search>
            <FontAwesomeIcon icon={faSearch} />
            <Panel.SearchInput type="text" placeholder="Search..." value={searchCar} onChange={(e)=>setSearchCar(e.target.value)} />
          </Panel.Search>
        </Panel.SearchContainer>
        <Panel.DateContainer>
          <MainBook setBookDate={setBookDate} />
        </Panel.DateContainer>
        <Panel.PriceContainer>
          <Panel.Select activeSelect >
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
                <Panel.Option onClick={()=>SelectSortPrice("Highest")}>
                  <FontAwesomeIcon icon={faDollarSign} />
                  <Panel.Text>Highest</Panel.Text>
                </Panel.Option>
                <Panel.Option onClick={()=>SelectSortPrice("Lowest")}>
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
