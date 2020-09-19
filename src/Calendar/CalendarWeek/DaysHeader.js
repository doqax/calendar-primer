import React from 'react'
import dayjs from "dayjs";
import { BorderBox, Text } from "@primer/components";

import DayHeader from "./DayHeader";

function DaysHeader({ calendar }) {
  const [calendarState] = calendar;
  const { date } = calendarState;
  const weekDaysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; // temporary
  const startOfWeek = dayjs(date).startOf("week");
  let dayDate = startOfWeek;
  const gmt = dayjs(date).format("ZZ");
  let days = [];
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
    days.push(<DayHeader key={i} day={day} dayDate={dayDate} calendar={calendar} />);
    dayDate = dayjs(dayDate).add(1, "d");
  });

  return days;
}

export default DaysHeader;