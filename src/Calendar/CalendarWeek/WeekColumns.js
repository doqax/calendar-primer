import React from "react";
import DaysColumn from "./DaysColumn";

import moment from "moment";

function WeekColumns({ calendar }) {
  const [calendarState] = calendar;
  const { date } = calendarState;

  const startOfWeek = moment(date).startOf("week");
  const weekColumns = [];
  for (let i = 0; i <= 6; i++) {
    weekColumns.push(
      <DaysColumn
        calendar={calendar}
        currentDate={moment(startOfWeek).add(i, "days")}
        key={i}
      />
    );
  }

  return weekColumns;
}

export default WeekColumns;
