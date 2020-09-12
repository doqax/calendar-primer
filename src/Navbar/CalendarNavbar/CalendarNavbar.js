import React from "react";
import { Flex, BorderBox } from "@primer/components";

import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

function CalendarNavbar({ calendar }) {
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
          <LeftSide calendar={calendar} />
          <RightSide calendar={calendar} />
        </Flex>
      </BorderBox>
    </div>
  );
}

export default CalendarNavbar;
