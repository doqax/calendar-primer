import React, { useState } from "react";

import moment from "moment";
import { Grid } from "@primer/components";

import Navbar from "./Navbar/Navbar";
import FullCalendar from "./FullCalendar";

function App() {
  const [calendarState, setCalendarState] = useState({
    date: moment(),
    sideCalendarDate: moment(),
    today: moment(),
    options: {
      selected : "month",
      prevSelected: "month",
      showSidenav: true,
      showSettings: false
    }
  });

  let gridTemplateColumns;
  if (calendarState.options.showSettings) {
    gridTemplateColumns = "0px 1fr";
  } else {
    gridTemplateColumns = calendarState.options.showSidenav ? "260px 1fr": "0px 1fr"
  } // find a better way to do this ?

  return (
    <div className="App">
      <div className="test"></div>
      <Grid
        gridTemplateColumns={gridTemplateColumns}
        gridTemplateRows="65px 1fr"
        height="100vh"
      >
        <Navbar
          calendar={[calendarState, setCalendarState]}
        />
        <FullCalendar
          calendar={[calendarState, setCalendarState]}
        />
      </Grid>
    </div>
  );
}

export default App;
