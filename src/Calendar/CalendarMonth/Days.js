import React from "react";
import moment from "moment";
import Day from "./Day";

function Days({ calendar }) {
  const [calendarState] = calendar;
  const { date } = calendarState;

  const startOfFirstWeek = moment(date).startOf("month").startOf("week");
  const endOfLastWeek = moment(date)
    .startOf("month")
    .add(1, "month")
    .subtract(1, "days")
    .endOf("week");

  const sumDays =
    date.diff(startOfFirstWeek, "day") + endOfLastWeek.diff(date, "day");

  let currentDate = moment(startOfFirstWeek).subtract(1, "day");
  const days = [];
  for (let i = 0; i <= sumDays; i++) {
    currentDate = moment(currentDate).add(1, "day");
    days.push(
      <Day
        currentDate={currentDate}
        calendar={calendar}
        showDay={i}
        key={`current-${i}`}
      />
    );
  }
  return days;
}

export default Days;
