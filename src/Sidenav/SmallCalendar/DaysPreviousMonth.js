import React from "react";
import moment from "moment";

import Day from "./Day";

function DaysPreviousMonth({ calendar }) {
  const [calendarState, setCalendarState] = calendar; 
  const { sideCalendarDate } = calendarState;


  const firstDayOfMonth = moment(sideCalendarDate).startOf("month").format("e");
  const lastMonth = moment(sideCalendarDate).subtract(1, "month");
  const firstDayMinusStartOfWeek = moment(sideCalendarDate)
    .startOf("month")
    .subtract(firstDayOfMonth, "days")
    .format("D");
  const sum = parseInt(firstDayOfMonth) + parseInt(firstDayMinusStartOfWeek);

  const blanks = [];
  for (let i = firstDayMinusStartOfWeek; i < sum; i++) {
    blanks.push(
      <Day
        day={i}
        color={"gray.5"}
        key={`prevBlanks-${i}`}
        dayColor={"prev-Month"}
        date={moment(lastMonth).date(i)}
        setCalendarState={setCalendarState}
      />
    );
  }

  return blanks;
}

export default DaysPreviousMonth;
