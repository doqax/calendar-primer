import React from "react";
import DaysColumn from "./DaysColumn";
import dayjs from "dayjs";

function WeekColumns({ calendar }) {
  const [calendarState] = calendar;
  const { date } = calendarState;

  const startOfWeek = dayjs(date).startOf("week");
  const weekColumns = [];
  for (let i = 0; i <= 6; i++) {
    weekColumns.push(
      <DaysColumn
        calendar={calendar}
        currentDate={dayjs(startOfWeek).add(i, "days")}
        key={i}
      />
    );
  }

  return weekColumns;
}

export default WeekColumns;
