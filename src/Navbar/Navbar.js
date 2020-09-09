import React from "react";
import { Flex } from "@primer/components";

import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import SettingsNavbar from "./SettingsNavbar";

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
        <div className="navbar">
          <SettingsNavbar selectedCalendar={selectedCalendar} setSelectedCalendar={setSelectedCalendar} />
        </div>
      );
    default:
      return (
        <div className="navbar">
          <Flex flexWrap="wrap" alignItems="center" backgroundColor="white">
            <div className="logo"></div>
            <LeftSide
              setGlobalDate={setGlobalDate}
              globalDate={globalDate}
              setSmallCalendarDate={setSmallCalendarDate}
            />
            <RightSide
              selectedCalendar={selectedCalendar}
              setSelectedCalendar={setSelectedCalendar}
            />
          </Flex>
        </div>
      );
  }
}

export default Navbar;
