import React from "react";
import moment from "moment";

import Day from "./Day";

function isSelectedWeek(calendarState, day) {
  const { sideCalendarDate } = calendarState;
  const { selected } = calendarState.options;
  const weekStartOf = parseInt(moment(sideCalendarDate).startOf("week").format("D"));
  const weekEndOf = parseInt(moment(sideCalendarDate).endOf("week").format("D"));

  return (
    weekStartOf <= day &&
    weekEndOf >= day &&
    selected === "week"
  );
}

function DaysInMonth({ calendar, sideSelected }) {
  const [calendarState ] = calendar;
  const { sideCalendarDate, today } = calendarState;

  const daysInMonth = moment(sideCalendarDate).daysInMonth();
  const todayInt = parseInt(moment(today).format("D"));
  const isSameMonth = moment(sideCalendarDate).isSame(today, "month");
  let style;
  const days = [];

  for (let i = 1; i <= daysInMonth; i++) {
    if (isSameMonth && todayInt === i) {
      style = `today`;
    } else if (isSelectedWeek(calendarState, i)) {
      style = "week";
    } else {
      style = `month`;
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
        weekSelected={isSelectedWeek(calendarState, i)}
      />
    );
  }

  return days;
}

export default DaysInMonth;
