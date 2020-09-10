import React from "react";
import { Grid } from "@primer/components";

import Hours from "./Hours";
import DaysHeader from "./DaysHeader";
import DaysColumn from "./DaysColumn";

import "./index.css";

function CalendarWeek({ globalDate }) {
  return (
    <div className="calendar--week">
      <Grid
        gridTemplateColumns="60px repeat(7, 1fr)"
        backgroundColor="white"
      >
        <DaysHeader globalDate={globalDate} />
      </Grid>
      <div className="calendar--week-time">
        <Grid gridTemplateColumns="60px repeat(7, 1fr)">
          <Hours />
          <DaysColumn />
        </Grid>
      </div>
    </div>
  );
}

export default CalendarWeek;
