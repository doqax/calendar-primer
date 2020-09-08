import React from "react";
import SmallCalendar from "./SmallCalendar/SmallCalendar";

function Sidenav({
  smallCalendarDate,
  setSmallCalendarDate,
}) {
  return (
    <div className="sidebar">
      <SmallCalendar
        smallCalendarDate={smallCalendarDate}
        setSmallCalendarDate={setSmallCalendarDate}
      />
    </div>
  );
}

export default Sidenav;
