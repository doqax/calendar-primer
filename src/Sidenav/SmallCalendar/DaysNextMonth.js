import React from "react";
import moment from "moment";

import Day from "./Day";

function DaysNextMonth({ sideCalendarDate }) {
  const lastDayOfMonth = moment(sideCalendarDate).endOf("month").format("e");
  const dayLeft = 7 - lastDayOfMonth;

  const blanks = [];
  for (let i = 1; i < dayLeft; i++) {
    blanks.push(<Day day={i} color={"gray.5"} key={`nextBlanks${i}`} />);
  }

  return blanks;
}

export default DaysNextMonth;
