import React from "react";
import { Grid, Box } from "@primer/components";

import Hours from "./Hours";
import DaysHeader from "./DaysHeader";
import WeekColumns from "./WeekColumns";

import "./index.css";

function getScrollbarWidth() {
  const outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.overflow = "scroll";
  outer.style.msOverflowStyle = "scrollbar";
  document.body.appendChild(outer);
  const inner = document.createElement("div");
  outer.appendChild(inner);
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
  outer.parentNode.removeChild(outer);

  return scrollbarWidth;
}

function CalendarWeek({ calendar }) {
  const [calendarState] = calendar;
  const { date } = calendarState;
  return (
    <div className="calendar--week">
      <div className="daysHeader">
        <Box paddingRight={[0, 0, getScrollbarWidth()]}>
          <Grid
            gridTemplateColumns="60px repeat(7, 1fr)"
            backgroundColor="white"
          >
            <DaysHeader date={date} />
          </Grid>
        </Box>
      </div>
      <div className="calendar--week-time">
        <Grid gridTemplateColumns="60px repeat(7, 1fr)">
          <Hours />
          <WeekColumns calendar={calendar} />
        </Grid>
      </div>
    </div>
  );
}

export default CalendarWeek;
