import React from "react";
import { Text } from "@primer/components";

import "./day.css";

function Day({ day, color, dayColor }) {
  return (
    <div className={`smallCalendar--day`}>
      <div className={`smallCalendar--day-zone ${dayColor}`}>
        <Text
          as="p"
          textAlign="center"
          fontWeight={500}
          my={1}
          fontSize={12}
          color={dayColor === "today" ? "white" : color}
        >
          {day}
        </Text>
      </div>
    </div>
  );
}

export default Day;
