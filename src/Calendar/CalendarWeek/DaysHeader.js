import React from 'react'
import moment from "moment";
import { BorderBox, Text } from "@primer/components";

import DayHeader from "./DayHeader";

function DaysHeader({ globalDate }) {
  const weekDaysShort = moment.weekdaysShort();
  const date = moment(globalDate).startOf("week");

  let dayDate = date;
  let days = [];
  const gmt = moment(globalDate).format("ZZ");
  days.push(
    <BorderBox
      borderRadius={0}
      borderWidth={1}
      borderRightWidth={0}
      borderLeftWidth={0}
      borderTopWidth={0}
      key={"GMT"}
    >
      <Text as="p" fontSize={12} marginTop="84px" marginBottom="0px">
        GMT {gmt.substring(0, gmt.length - 2)}
      </Text>
    </BorderBox>
  );
  weekDaysShort.forEach((day, i) => {
    days.push(<DayHeader key={i} day={day} dayDate={dayDate} />);
    dayDate = moment(dayDate).add(1, "d");
  });

  return days;
}

export default DaysHeader;