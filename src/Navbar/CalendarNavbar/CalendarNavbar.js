import React from "react";
import { Flex, BorderBox } from "@primer/components";

import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

function CalendarNavbar({ calendar }) {
  const [calendarState, setCalendarState] = calendar;
  console.log(calendarState);
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
          <LeftSide calendar={[calendarState, setCalendarState]} />
          <RightSide calendar={[calendarState, setCalendarState]} />
        </Flex>
      </BorderBox>
    </div>
  );
}

export default CalendarNavbar;
