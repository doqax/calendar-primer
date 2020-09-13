import React from "react";
import SmallCalendar from "./SmallCalendar/SmallCalendar";
import ShowHolidays from "./CalendarOptions/ShowHolidays";

function Sidenav({ calendar }) {
  return (
    <div className="sidebar">
      <SmallCalendar
        calendar={calendar}
      />
      <ShowHolidays />
    </div>
  );
}

export default Sidenav;
