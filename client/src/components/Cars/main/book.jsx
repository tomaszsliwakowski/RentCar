import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortDown,
  faCalendarDays,
  faSortUp,
} from "@fortawesome/free-solid-svg-icons";
import "react-calendar/dist/Calendar.css";
import BookCard from "../../Home/bookCard";

export default function MainBook({
  setBookDate,
  activeSelect,
  BookDate,
  ClearInputAndOpt,
  activeDate,
}) {
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
    if (
      (activeSelect && isStartCalendarOpen === true) ||
      (activeDate && isStartCalendarOpen === true)
    ) {
      toggleStartDateCalendar();
    } else if (
      (activeSelect && isReturnCalendarOpen === true) ||
      (activeDate && isReturnCalendarOpen === true)
    ) {
      toggleReturnDateCalendar();
    }
  }, [activeSelect, activeDate]);

  const setDate = (value, action) => {
    if (action === "start") {
      setStartDate(value);
      setBookDate({
        ...BookDate,
        [action]: value,
      });
    } else if (action === "return") {
      setReturnDate(value);
      setBookDate({
        ...BookDate,
        [action]: value,
      });
    }
    ClearInputAndOpt();
  };

  useEffect(() => {
    setStartDate(BookDate.start);
    setReturnDate(BookDate.return);
  }, [BookDate]);

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
          <BookCard.DateCalendar
            value={startDate}
            onChange={(value) => setDate(value, "start")}
          />
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
            onChange={(value) => setDate(value, "return")}
          />
        )}
      </BookCard.ItemContainer>
    </>
  );
}
