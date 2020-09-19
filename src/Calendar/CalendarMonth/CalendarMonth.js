import React from "react";
import Days from "./Days";
import { Grid } from "@primer/components";

function CalendarMonth({ calendar }) {
  return (
    <div className="calendar">
      <Grid gridTemplateColumns="repeat(7, 1fr)" height="100%">
        <Days calendar={calendar} />
      </Grid>
    </div>
  );
}

export default CalendarMonth;
