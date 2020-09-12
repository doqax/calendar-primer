import React from "react";
import moment from "moment";

import Day from "./Day";

function DaysPreviousMonth({ sideCalendarDate }) {
  const firstDayOfMonth = moment(sideCalendarDate).startOf("month").format("e"); // 0 = sunday, 6 = saturday. use format("d") for iso
  const firstDayMinusStartOfWeek = moment(sideCalendarDate)
    .startOf("month")
    .subtract(firstDayOfMonth, "days")
    .format("D");

  const sum = parseInt(firstDayOfMonth) + parseInt(firstDayMinusStartOfWeek);
  const blanks = [];
  for (let i = firstDayMinusStartOfWeek; i < sum; i++) {
    blanks.push(<Day day={i} color={"gray.5"} key={`prevBlanks-${i}`} />);
  }

  return blanks;
}

export default DaysPreviousMonth;
