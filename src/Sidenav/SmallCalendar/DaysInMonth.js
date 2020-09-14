import React from "react";
import moment from "moment";

import Day from "./Day";

function DaysInMonth({ calendar, sideSelected }) {
  const [calendarState, setCalendarState] = calendar; 
  const { sideCalendarDate, today } = calendarState;

  const daysInMonth = moment(sideCalendarDate).daysInMonth();
  const todayInt = parseInt(moment(today).format("D"));
  const isSameMonth = moment(sideCalendarDate).isSame(today, "month");
  let style;
  const days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    if (isSameMonth && todayInt === i) {
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
