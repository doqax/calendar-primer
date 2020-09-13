import React from "react";
import moment from "moment";

import Day from "./Day";

function DaysInMonth({ calendar, sideSelected }) {
  const [calendarState, setCalendarState] = calendar; 
  const { sideCalendarDate } = calendarState;

  const daysInMonth = moment(sideCalendarDate).daysInMonth();
  const today = parseInt(moment(sideCalendarDate).format("D"));
  const isSameDay = moment().isSame(sideCalendarDate, "day");

  let style;
  const days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    if (isSameDay && today === i) {
      style = `today`;
    } else {
      style = `currentMonth`;
    }

    days.push(
      <Day
        day={i}
        color={"gray.8"}
        dayColor={style}
        key={`current-${i}`}
        date={moment(sideCalendarDate).date(i)}
        calendar={calendar}
        sideSelected={sideSelected}
      />
    );
  }

  return days;
}

export default DaysInMonth;
