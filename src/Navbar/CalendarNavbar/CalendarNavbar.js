import React from "react";
import { Flex, BorderBox } from "@primer/components";

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
      <BorderBox
        borderRadius={0}
        borderWidth={1}
        borderRightWidth={0}
        borderTopWidth={0}
        borderLeftWidth={0}
        height={"65px"}
      >
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
      </BorderBox>
    </div>
  );
}

export default CalendarNavbar;
