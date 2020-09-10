import React from "react";
import { BorderBox, Text, Sticky } from "@primer/components";

import moment from "moment";

function DayHeader({ day, dayDate }) {
  return (
    <div className="daysHeader">
    <BorderBox
      borderRadius={0}
      borderWidth={1}
      borderRightWidth={0}
      borderTopWidth={0}
      borderLeftWidth={0}
    >
      <div className="daysHeader--border"></div>
      <Sticky height={100}>
        <Text as={"p"} textAlign="center" marginTop={1} fontSize={14} fontWeight={500} color={"gray.5"}>
          {day.toUpperCase()}
        </Text>
        <Text as={"p"} textAlign="center" marginTop={1} fontSize={20} fontWeight={500}>
          {moment(dayDate).format("D")}
        </Text>
      </Sticky>
    </BorderBox>
    </div>
  );
}

export default DayHeader;
