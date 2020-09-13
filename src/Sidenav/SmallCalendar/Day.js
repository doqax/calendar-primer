import React from "react";
import { Text } from "@primer/components";
import moment from "moment";
import "./day.css";

// To improve
function Day({ day, color, dayColor, date, calendar, sideSelected }) {
  const [calendarState, setCalendarState] = calendar;
  const { selected } = calendarState.options;
  const [dateSelected, setDateSelected] = sideSelected;
  const sameDate = moment(dateSelected).isSame(date, "day");

  const handleOnClick = () => {
    if ((sameDate && selected !== "day") || (!sameDate && selected === "day")) {
      setCalendarState((state) => ({
        ...state,
        date: moment(date),
        options: {
          ...state.options,
          selected: "day",
        },
      }));
      setDateSelected(date);
    } else if (sameDate && selected === "day") {
      setCalendarState((state) => ({
        ...state,
        options: {
          ...state.options,
          selected: "month", // supposed to be previous State but not implemented yet
        },
      }));
    } else {
      setDateSelected(date);
    }
  };

  return (
    <div className={`smallCalendar--day`}>
      <div
        className={`smallCalendar--day-zone ${dayColor} ${
          moment(dateSelected).isSame(date, "day") && "selected"
        }`}
        onClick={handleOnClick}
      >
        <Text
          as="p"
          textAlign="center"
          fontWeight={500}
          my={1}
          fontSize={12}
          color={dayColor === "today" ? "white" : color}
        >
          {day}
        </Text>
      </div>
    </div>
  );
}

export default Day;
