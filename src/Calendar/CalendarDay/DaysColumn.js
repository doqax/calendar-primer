import moment from "moment";
import React from "react";

import HoursBox from "./HoursBox";

function DaysColumn({ calendar }) {
  const [calendarState, setCalendarState] = calendar;

  const isSameHour = (i) => {
    if (moment(calendarState.date).isSame(calendarState.today, "day")) {
      if(i == moment(calendarState.today).format("H")) {
        return calendarState.today;
      }
      return false;
    }

    return false;
  };

  const days = [];
  for (let i = 0; i <= 23; i++) {
    days.push(
      <HoursBox
        key={i}
        date={moment(calendarState.date).add(i, "hour")}
        isSameHour={isSameHour(i)}
      />
    );
  }

  return <div className="daysColumn">{days}</div>;
}

export default DaysColumn;
