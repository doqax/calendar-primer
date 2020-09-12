import React from "react";

import CalendarDay from "./CalendarDay/CalendarDay";
import CalendarWeek from "./CalendarWeek/CalendarWeek";
import CalendarMonth from "./CalendarMonth/CalendarMonth";

import CalendarAgenda from "./CalendarAgenda/CalendarAgenda";

function Calendar({ calendar }) {
  const [calendarState] = calendar;
  const { options } = calendarState;
  switch (options.selected) {
    case "day":
      return <CalendarDay calendar={calendar} />;
    case "week":
      return <CalendarWeek calendar={calendar} />;
    case "month":
      return <CalendarMonth calendar={calendar} />;
    case "agenda":
      return <CalendarAgenda calendar={calendar} />;
    default:
      return <CalendarMonth calendar={calendar} />;
  }
}

export default Calendar;
