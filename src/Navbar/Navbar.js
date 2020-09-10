import React from "react";
import SettingsNavbar from "./SettingsNavbar";
import CalendarNavbar from "./CalendarNavbar/CalendarNavbar";

function Navbar({
  globalDate,
  setGlobalDate,
  selectedCalendar,
  setSelectedCalendar,
  setSmallCalendarDate,
}) {
  switch (selectedCalendar.settings) {
    case "settings":
      return (
        <SettingsNavbar
          selectedCalendar={selectedCalendar}
          setSelectedCalendar={setSelectedCalendar}
        />
      );
    default:
      return (
        <CalendarNavbar
          setGlobalDate={setGlobalDate}
          globalDate={globalDate}
          setSmallCalendarDate={setSmallCalendarDate}
          selectedCalendar={selectedCalendar}
          setSelectedCalendar={setSelectedCalendar}
        />
      );
  }
}

export default Navbar;
