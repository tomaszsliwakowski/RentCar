import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortDown,
  faCalendarDays,
  faSortUp,
} from "@fortawesome/free-solid-svg-icons";
import "react-calendar/dist/Calendar.css";
import BookCard from "../../Home/bookCard";

export default function MainBook({ setBookDate }) {
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

  useEffect(() => {
    setBookDate({ start: startDate, return: returnDate });
  }, [startDate, returnDate]);

  return (
    <>
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
    </>
  );
}
