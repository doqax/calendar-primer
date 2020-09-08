import React from 'react';

import { Text } from "@primer/components";

function OneLetterWeekDay() {
  let days = "M-T-W-T-F-S-S";
  days = days.split("-");
  const weekday = days.map((day, i) => (
    <Text
      as="p"
      key={i}
      textAlign="center"
      my={1}
      fontSize={14}
      fontWeight="bold"
    >
      {day}
    </Text>
  ));

  return weekday;
}

export default OneLetterWeekDay;