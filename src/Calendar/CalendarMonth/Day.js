import React from "react";
import { Absolute, Text } from "@primer/components";

import moment from "moment";
import "./day.css";


function Day({ calendar, currentDate, showDay }) {
  const [calendarState] = calendar;
  const { today, date } = calendarState;
  const isToday = moment(today).isSame(currentDate, "day");
  const isCurrentMonth = moment(currentDate).isSame(date, "month");
  const isWeekend = moment(currentDate).format("d") == 0 || moment(currentDate).format("d") == 6; // 5 for isoDay

  const color = isToday ? "blue.4" : isCurrentMonth ? "gray.9" : "gray.4";
  const bg = !isCurrentMonth ? "blanks" : isWeekend ? " weekend" : "";


  return (
    <div className={`calendarMonth--day ${bg} ${isToday ? " today" : ""}`}>
      <Absolute width="100%" m={0} right={0} top={0}>
        <Text as="p" my={1} mt={1} fontSize={14} p={0} textAlign="center" color={"gray.9"} fontWeight="bold">
          {showDay <= 6 && currentDate.format("ddd")}
        </Text>
        </Absolute>
        <Absolute width="100%" m={0} right={0} top={0}>
        <Text
          mt={2}
          mb={1}
          textAlign={"right"}
          mr={3}
          as="p"
          fontSize={14}
          fontWeight="bold"
          color={color}
        >
          {currentDate.format("D")}
        </Text>
      </Absolute>
    </div>
  );
}

export default Day;
