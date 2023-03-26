import React from "react";
import {
  CardContainer,
  ItemContainer,
  Icon,
  Name,
  SmallIcon,
  LineSeperator,
  DateCalendar,
  HorizontalMargin,
  VerticalMargin,
  Button,
} from "./styles/bookCard";

export default function BookCard({ children }) {
  return <CardContainer>{children}</CardContainer>;
}

BookCard.ItemContainer = function BookCardItemContainer({ children }) {
  return <ItemContainer>{children}</ItemContainer>;
};

BookCard.Icon = function BookCardIcon({ children }) {
  return <Icon>{children}</Icon>;
};

BookCard.Name = function BookCardName({ children, ...restprops }) {
  return <Name {...restprops}>{children}</Name>;
};

BookCard.SmallIcon = function BookCardSmallIcon({ children }) {
  return <SmallIcon>{children}</SmallIcon>;
};

BookCard.LineSeperator = function BookCardLineSeperator() {
  return <LineSeperator />;
};

BookCard.DateCalendar = function BookCardDateCalendar({ ...restprops }) {
  return <DateCalendar {...restprops} />;
};

BookCard.Marginer = function BookCardMarginer({
  direction = "horizontal",
  ...restprops
}) {
  return direction === "horizontal" ? (
    <HorizontalMargin {...restprops} />
  ) : (
    <VerticalMargin {...restprops} />
  );
};

BookCard.Button = function BookCardButton({ children, ...restprops }) {
  return <Button {...restprops}>{children}</Button>;
};
