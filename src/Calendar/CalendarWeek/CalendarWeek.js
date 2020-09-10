import React from "react";
import { Grid, Box } from "@primer/components";

import Hours from "./Hours";
import DaysHeader from "./DaysHeader";
import DaysColumn from "./DaysColumn";

import "./index.css";

function CalendarWeek({ globalDate }) {
  return (
    <div className="calendar--week">
      <div className="daysHeader">
        <Box paddingRight={[0, 0, 17]}>
        <Grid gridTemplateColumns="60px repeat(7, 1fr)" backgroundColor="white">
          <DaysHeader globalDate={globalDate} />
        </Grid>
        </Box>
      </div>
      <div className="calendar--week-time">
        <Grid gridTemplateColumns="60px repeat(7, 1fr)">
          <Hours />
          <DaysColumn />
          <DaysColumn />
          <DaysColumn />
          <DaysColumn />
          <DaysColumn />
          <DaysColumn />
          <DaysColumn />
        </Grid>
      </div>
    </div>
  );
}

export default CalendarWeek;