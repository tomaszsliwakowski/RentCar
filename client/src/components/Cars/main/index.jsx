import React from "react";
import {
  Container,
  PanelContainer,
  Section,
  SearchContainer,
  DateContainer,
  PriceContainer,
  Search,
  SearchInput,
  Select,
  OptionsInput,
  SelectBtn,
  SelectValue,
  Text,
  Icon,
  Options,
  Option,
  DateReset,
} from "./styles/main";

export function Main({ children }) {
  return <Container>{children}</Container>;
}

Main.Section = function MainSection({ children }) {
  return <Section>{children}</Section>;
};

export function Panel({ children }) {
  return <PanelContainer>{children}</PanelContainer>;
}

Panel.SearchContainer = function PanelSearchContainer({ children }) {
  return <SearchContainer>{children}</SearchContainer>;
};

Panel.DateContainer = function PanelSearchDateContainer({ children }) {
  return <DateContainer>{children}</DateContainer>;
};
Panel.DateReset = function PanelDateReset({ children }) {
  return <DateReset>{children}</DateReset>;
};

Panel.PriceContainer = function PanelPriceContainer({
  children,
  ...restprops
}) {
  return <PriceContainer {...restprops}>{children}</PriceContainer>;
};

Panel.Search = function PanelSearch({ children }) {
  return <Search>{children}</Search>;
};

Panel.SearchInput = function PanelSearchInput({ ...restprops }) {
  return <SearchInput {...restprops} />;
};

Panel.Select = function PanelSelect({ children, ...restprops }) {
  return <Select {...restprops}>{children}</Select>;
};

Panel.OptionsBtn = function PanelOptionsBtn({ ...restprops }) {
  return <OptionsInput {...restprops} />;
};

Panel.SelectBtn = function PanelSelectBtn({ children }) {
  return <SelectBtn>{children}</SelectBtn>;
};

Panel.SelectedValue = function PanelSelectedValue({ children }) {
  return <SelectValue>{children}</SelectValue>;
};

Panel.Text = function PanelText({ children, ...restprops }) {
  return <Text {...restprops}>{children}</Text>;
};
Panel.Icon = function PanelIcon({ children }) {
  return <Icon>{children}</Icon>;
};
Panel.Options = function PanelOptions({ children, ...restprops }) {
  return <Options {...restprops}>{children}</Options>;
};
Panel.Option = function PanelOption({ children, ...restprops }) {
  return <Option {...restprops}>{children}</Option>;
};
