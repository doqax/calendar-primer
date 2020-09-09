import React from "react";

import CalendarDay from "./CalendarDay/CalendarDay";
import CalendarWeek from "./CalendarWeek/CalendarWeek";
import CalendarMonth from "./CalendarMonth/CalendarMonth";

import CalendarAgenda from "./CalendarAgenda/CalendarAgenda";

function Calendar({ globalDate, selectedCalendar }) {
  switch (selectedCalendar.selected) {
    case "day":
      return <CalendarDay globalDate={globalDate} />;
    case "week":
      return <CalendarWeek globalDate={globalDate} />;
    case "month":
      return <CalendarMonth globalDate={globalDate} />;
    case "agenda":
      return <CalendarAgenda globalDate={globalDate} />;
    default:
      return <CalendarMonth globalDate={globalDate} />;
  }
}

export default Calendar;
