import React from "react";
import { Flex } from "@primer/components";

import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

function CalendarNavbar({
  globalDate,
  setGlobalDate,
  selectedCalendar,
  setSelectedCalendar,
  setSmallCalendarDate,
}) {
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

export default CalendarNavbar;
