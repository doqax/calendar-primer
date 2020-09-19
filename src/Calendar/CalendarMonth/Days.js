import React from "react";
import dayjs from "dayjs";
import Day from "./Day";

function Days({ calendar }) {
  const [calendarState] = calendar;
  const { date } = calendarState;

  const startOfFirstWeek = dayjs(date).startOf("month").startOf("week");
  const endOfLastWeek = dayjs(date)
    .startOf("month")
    .add(1, "month")
    .subtract(1, "days")
    .endOf("week");

  const sumDays =
    date.diff(startOfFirstWeek, "day") + endOfLastWeek.diff(date, "day");

  let currentDate = dayjs(startOfFirstWeek).subtract(1, "day");
  const days = [];
  for (let i = 0; i <= sumDays; i++) {
    currentDate = dayjs(currentDate).add(1, "day");
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
