import React from "react";
import SettingsNavbar from "./SettingsNavbar";
import CalendarNavbar from "./CalendarNavbar/CalendarNavbar";

function Navbar({ calendar }) {
  const [ calendarState ] = calendar;
  const { showSettings } = calendarState.options;

  if (showSettings) {
    return <SettingsNavbar calendar={calendar} />;
  } else {
    return <CalendarNavbar calendar={calendar} />;
  }
}

export default Navbar;
