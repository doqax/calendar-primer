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
            <LeftSide
              setGlobalDate={setGlobalDate}
              globalDate={globalDate}
              setSmallCalendarDate={setSmallCalendarDate}
              selectedCalendar={selectedCalendar}
              setSelectedCalendar={setSelectedCalendar}
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
