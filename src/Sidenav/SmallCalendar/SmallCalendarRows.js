import React from "react";
import { Grid } from "@primer/components";

import DaysPreviousMonth from "./DaysPreviousMonth";
import DaysInMonth from "./DaysInMonth";
import DaysNextMonth from "./DaysNextMonth";

function SmallCalendarRows({ calendar }) {
  const [calendarState, setCalendarState] = calendar;
  const { sideCalendarDate, options, date } = calendarState;

  return (
    <Grid
      gridTemplateColumns="repeat(7, auto)"
      gridTemplateRows="repeat(6, 30px)"
      height="calc(6 * 40px)"
      pt={2}
      pb={6}
      px={3}
    >
      <DaysPreviousMonth sideCalendarDate={sideCalendarDate} />
      <DaysInMonth sideCalendarDate={sideCalendarDate} />
      <DaysNextMonth sideCalendarDate={sideCalendarDate} />
    </Grid>
  );
}

export default SmallCalendarRows;
