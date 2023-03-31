import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortDown,
  faCalendarDays,
  faSortUp,
} from "@fortawesome/free-solid-svg-icons";
import "react-calendar/dist/Calendar.css";
import BookCard from "./index";

export default function BookCardContainer() {
  const [startDate, setStartDate] = useState(new Date());
  const [isStartCalendarOpen, setStartCalendarOpen] = useState(false);
  const [returnDate, setReturnDate] = useState(new Date());
  const [isReturnCalendarOpen, setReturnCalendarOpen] = useState(false);

  const toggleStartDateCalendar = () => {
    setStartCalendarOpen(!isStartCalendarOpen);
    if (isReturnCalendarOpen) setReturnCalendarOpen(false);
  };

  const toggleReturnDateCalendar = () => {
    setReturnCalendarOpen(!isReturnCalendarOpen);
    if (isStartCalendarOpen) setStartCalendarOpen(false);
  };

  const BookRide = () => {
    setReturnCalendarOpen(false);
    setStartCalendarOpen(false);
  };

  return (
    <BookCard>
      <BookCard.ItemContainer>
        <BookCard.Icon>
          <FontAwesomeIcon icon={faCalendarDays} />
        </BookCard.Icon>
        <BookCard.Name onClick={toggleStartDateCalendar}>
          Pick Up Date
        </BookCard.Name>
        <BookCard.SmallIcon>
          <FontAwesomeIcon icon={isStartCalendarOpen ? faSortUp : faSortDown} />
        </BookCard.SmallIcon>
        {isStartCalendarOpen && (
          <BookCard.DateCalendar value={startDate} onChange={setStartDate} />
        )}
      </BookCard.ItemContainer>
      <BookCard.LineSeperator />
      <BookCard.ItemContainer>
        <BookCard.Icon>
          <FontAwesomeIcon icon={faCalendarDays} />
        </BookCard.Icon>
        <BookCard.Name onClick={toggleReturnDateCalendar}>
          Return Date
        </BookCard.Name>
        <BookCard.SmallIcon>
          <FontAwesomeIcon
            icon={isReturnCalendarOpen ? faSortUp : faSortDown}
          />
        </BookCard.SmallIcon>
        {isReturnCalendarOpen && (
          <BookCard.DateCalendar
            offset
            value={returnDate}
            onChange={setReturnDate}
          />
        )}
      </BookCard.ItemContainer>
      <BookCard.Marginer direction="horizontal" margin="2em" />
      <BookCard.Button onClick={() => BookRide()}>
        Book Your Ride
      </BookCard.Button>
    </BookCard>
  );
}
