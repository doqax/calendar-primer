import React from "react";
import moment from "moment";

import Day from "./Day";

function DaysNextMonth({ calendar, sideSelected }) {
  const [calendarState, setCalendarState] = calendar; 
  const { sideCalendarDate } = calendarState;
  const lastDayOfMonth = moment(sideCalendarDate).endOf("month").format("e");
  const nextMonth = moment().add(1, "month");
  const dayLeft = 7 - lastDayOfMonth;

  const blanks = [];
  for (let i = 1; i < dayLeft; i++) {
    blanks.push(
      <Day
        day={i}
        color={"gray.5"}
        key={`nextBlanks${i}`}
        dayColor={"next-Month"}
        date={moment(nextMonth).date(i)}
        calendar={calendar}
        sideSelected={sideSelected}
      />
    );
  }

  return blanks;
}

export default DaysNextMonth;
