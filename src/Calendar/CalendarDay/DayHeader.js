import React from "react";
import { BorderBox, Text, Sticky } from "@primer/components";

import dayjs from "dayjs";

function DayHeader({ day, dayDate, textAlign }) {
  return (
    <div className="dayHeader">
    <BorderBox
      borderRadius={0}
      borderWidth={1}
      borderRightWidth={0}
      borderTopWidth={0}
      borderLeftWidth={0}
    >
      <div className="dayHeader--border"></div>
      <Sticky height={100} mx={4}>
        <Text as={"p"}  marginTop={1} textAlign={textAlign} fontSize={14} fontWeight={500} color={"gray.5"}>
          {day.toUpperCase()}
        </Text>
        <Text as={"p"}  marginTop={1} textAlign={textAlign} fontSize={20} fontWeight={500}>
          {dayjs(dayDate).format("DD-MM")}
        </Text>
      </Sticky>
    </BorderBox>
    </div>
  );
}

export default DayHeader;
