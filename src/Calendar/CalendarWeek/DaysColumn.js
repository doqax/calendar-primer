import moment from "moment";
import React, { useEffect } from "react";

import HoursBox from "../CalendarDay/HoursBox";

function DaysColumn({ calendar, currentDate }) {
  const [calendarState, setCalendarState] = calendar;

  const isSameHour = (i) => {
    if (moment(currentDate).isSame(calendarState.today, "day")) {
      if(i === parseInt(moment(calendarState.today).format("H"))) {
        return calendarState.today;
      }
      return false;
    }

    return false;
  };

  useEffect(() => {
    const updateMinutes = setInterval(() => {
      setCalendarState({
        ...calendarState,
        today: moment()
      })
    }, 60000);
    return () => clearInterval(updateMinutes);
  }, [calendarState, setCalendarState]);

  const days = [];
  for (let i = 0; i <= 23; i++) {
    days.push(
      <HoursBox
        key={i}
        date={moment(currentDate).add(i, "hour")}
        isSameHour={isSameHour(i)}
      />
    );
  }

  return <div className="daysColumn">{days}</div>;
}

export default DaysColumn;
