import React from "react";
import SmallCalendar from "./SmallCalendar/SmallCalendar";
import ShowHolidays from "./CalendarOptions/ShowHolidays";

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
      <ShowHolidays />
    </div>
  );
}

export default Sidenav;
