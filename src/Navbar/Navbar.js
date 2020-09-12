import React from "react";
import SettingsNavbar from "./SettingsNavbar";
import CalendarNavbar from "./CalendarNavbar/CalendarNavbar";

function Navbar({ calendar }) {
  const [calendarState, setCalendarState] = calendar;
  const { showSettings } = calendarState.options;

  if (showSettings) {
    return <SettingsNavbar calendar={[calendarState, setCalendarState]} />;
  } else {
    return <CalendarNavbar calendar={[calendarState, setCalendarState]} />;
  }
}

export default Navbar;
