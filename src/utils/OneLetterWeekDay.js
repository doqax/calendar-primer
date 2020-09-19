import React from "react";
import { Text, Tooltip } from "@primer/components";

function OneLetterWeekDay() {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const weekday = weekdays.map((day) => (
    <Text
      as="p"
      key={day}
      textAlign="center"
      my={1}
      fontSize={14}
      fontWeight="bold"
    >
      <Tooltip aria-label={day}>{day.charAt(0)}</Tooltip>
    </Text>
  ));

  return weekday;
}

export default OneLetterWeekDay;
