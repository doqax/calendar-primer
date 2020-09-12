import React from "react";

import DaysPreviousMonth from "./DaysPreviousMonth";
import DaysInMonth from "./DaysInMonth";
import DaysNextMonth from "./DaysNextMonth";

function SmallCalendarRows({ calendar }) {
  const [calendarState, setCalendarState] = calendar;
  const { sideCalendarDate, options, date } = calendarState;

  return (
    <>
      <DaysPreviousMonth sideCalendarDate={sideCalendarDate} />
      <DaysInMonth sideCalendarDate={sideCalendarDate} />
      <DaysNextMonth sideCalendarDate={sideCalendarDate} />
    </>
  );
}

export default SmallCalendarRows;
