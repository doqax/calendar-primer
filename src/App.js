import React, { useState } from "react";

import moment from "moment/min/moment-with-locales";
import { Grid } from "@primer/components";

import Navbar from "./Navbar/Navbar";
import FullCalendar from "./FullCalendar";

function App() {
  const [globalDate, setGlobalDate] = useState(moment());
  const [smallCalendarDate, setSmallCalendarDate] = useState(globalDate);

  const [selectedCalendar, setSelectedCalendar] = useState({
    selected: "month",
    settings: "settings",
  });
  console.log(selectedCalendar);

  return (
    <div className="App">
      <Grid
        gridTemplateColumns={["260px 1fr"]}
        gridTemplateRows="60px 1fr"
        height="100vh"
      >
        <Navbar
          globalDate={globalDate}
          setGlobalDate={setGlobalDate}
          selectedCalendar={selectedCalendar}
          setSelectedCalendar={setSelectedCalendar}
          setSmallCalendarDate={setSmallCalendarDate}
        />
        <FullCalendar
          globalDate={globalDate}
          selectedCalendar={selectedCalendar}
          smallCalendarDate={smallCalendarDate}
          setSmallCalendarDate={setSmallCalendarDate}
        />
      </Grid>
    </div>
  );
}

export default App;
