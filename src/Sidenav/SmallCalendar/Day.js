import React from "react";
import { Text } from "@primer/components";

import "./day.css";

function Day({ day, color, dayColor }) {
  return (
    <div className={`smallCalendar--day ${dayColor}`}>
      <Text
        as="p"
        textAlign="center"
        my={1}
        fontSize={12}
        color={dayColor === "today" ? "white" : color}
      >
        {day}
      </Text>
    </div>
  );
}

export default Day;
