import React from "react";
import moment from "moment";
import Day from "./Day";

function Days({ calendar, sideSelected }) {
  const [calendarState] = calendar;
  const { sideCalendarDate } = calendarState;

  const startOfFirstWeek = moment(sideCalendarDate)
    .startOf("month")
    .startOf("week");
  const endOfLastWeek = moment(sideCalendarDate)
    .startOf("month")
    .add(1, "month")
    .subtract(1, "days")
    .endOf("week");

  const sumDays =
    sideCalendarDate.diff(startOfFirstWeek, "day") +
    endOfLastWeek.diff(sideCalendarDate, "day");

  let currentDate = moment(startOfFirstWeek).subtract(1, "day");
  const days = [];
  for (let i = 0; i <= sumDays; i++) {
    currentDate = moment(currentDate).add(1, "day");
    days.push(
      <Day
        date={currentDate}
        calendar={calendar}
        sideSelected={sideSelected}
        key={`current-${i}`}
      />
    );
  }
  return days;
}

export default Days;
