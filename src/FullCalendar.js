import React from "react";

import Calendar from "./Calendar/Calendar";
import Sidenav from "./Sidenav/Sidenav";
import Settings from "./Settings/Settings";

function FullCalendar({
  selectedCalendar,
  globalDate,
  smallCalendarDate,
  setSmallCalendarDate,
}) {
  switch (selectedCalendar.settings) {
    case "settings":
      return <Settings />;
    default:
      return (
        <>
          <Calendar
            globalDate={globalDate}
            selectedCalendar={selectedCalendar}
          />
          <Sidenav
            smallCalendarDate={smallCalendarDate}
            setSmallCalendarDate={setSmallCalendarDate}
          />
        </>
      );
  }
}

export default FullCalendar;
