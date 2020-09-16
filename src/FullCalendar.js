import React from "react";

import Calendar from "./Calendar/Calendar";
import Sidenav from "./Sidenav/Sidenav";
import Settings from "./Settings/Settings";

function FullCalendar({ calendar }) {
  const [calendarState] = calendar;
  const { showSettings, showSidenav } = calendarState.options;

  if (showSettings) {
    return <Settings />;
  } else {
    return (
      <>
        <Calendar calendar={calendar} />
        {showSidenav && <Sidenav calendar={calendar} />}
      </>
    );
  }
}

export default FullCalendar;
