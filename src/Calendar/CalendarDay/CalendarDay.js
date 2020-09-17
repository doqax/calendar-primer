import React from 'react'
import { Grid, Box } from "@primer/components";

import Day from "./Day";
import Hours from "../CalendarWeek/Hours";
import DaysColumn from "./DaysColumn";

function CalendarDay({ calendar }) {
  return (
    <div className="calendar--week">
      <div className="daysHeader">
        <Box paddingRight={[0, 0, 17]}>
        <Grid gridTemplateColumns="60px 1fr" backgroundColor="white">
          <Day calendar={calendar} />
        </Grid>
        </Box>
      </div>
      <div className="calendar--week-time">
        <Grid gridTemplateColumns="60px 1fr">
          <Hours />
          <DaysColumn calendar={calendar} />
        </Grid>
      </div>
    </div>
  )
}

export default CalendarDay
