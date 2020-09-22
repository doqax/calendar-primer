import React from "react";
import SideCalendar from "./SideCalendar/SideCalendar";

function Sidenav({ calendar }) {
  return (
    <div className="sidebar">
      <SideCalendar calendar={calendar} />
    </div>
  );
}

export default Sidenav;
