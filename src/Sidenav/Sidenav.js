import React from "react";
import SideCalendar from "./SideCalendar/SideCalendar";
import ShowHolidays from "./CalendarOptions/ShowHolidays";

function Sidenav({ calendar }) {
  return (
    <div className="sidebar">
      <SideCalendar calendar={calendar} />
      {/* <ShowHolidays /> */}
    </div>
  );
}

export default Sidenav;
