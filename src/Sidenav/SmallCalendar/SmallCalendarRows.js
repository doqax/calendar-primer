import React from "react";
import { Grid } from "@primer/components";

import DaysPreviousMonth from "./DaysPreviousMonth";
import DaysInMonth from "./DaysInMonth";
import DaysNextMonth from "./DaysNextMonth";

function SmallCalendarRows({ calendar, sideSelected }) {
  return (
    <Grid
      gridTemplateColumns="repeat(7, auto)"
      gridTemplateRows="repeat(6, 30px)"
      height="calc(6 * 40px)"
      pt={2}
      pb={6}
      px={3}
    >
      <DaysPreviousMonth calendar={calendar} sideSelected={sideSelected} />
      <DaysInMonth calendar={calendar} sideSelected={sideSelected} />
      <DaysNextMonth calendar={calendar} sideSelected={sideSelected} />
    </Grid>
  );
}

export default SmallCalendarRows;
