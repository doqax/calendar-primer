import React from "react";
import { Absolute, Text } from "@primer/components";

import moment from "moment";
import "./day.css";

function Day({ calendar, currentDate, showDay }) {
  const [calendarState, setCalendarState] = calendar;
  const { today, date } = calendarState;
  const isToday = moment(today).isSame(currentDate, "day");
  const isCurrentMonth = moment(currentDate).isSame(date, "month");
  const isWeekend =
    moment(currentDate).format("d") == 0 ||
    moment(currentDate).format("d") == 6; // 5 for isoDay

  const color = isToday ? "blue.4" : isCurrentMonth ? "gray.9" : "gray.4";
  const bg = !isCurrentMonth ? "blanks" : isWeekend ? " weekend" : "";

  const handleDateClick = (e) => {
    e.stopPropagation();
    setCalendarState({
      ...calendarState,
      date: currentDate.clone(),
      sideCalendarDate: currentDate.clone(),
      options: {
        ...calendarState.options,
        selected: "day",
      },
    });
    console.log("GO TO DAY");
  };

  const handleEventClick = (e) => {
    console.log("Trigger add event");
  };

  return (
    <div
      className={`calendarMonth--day ${bg} ${isToday ? " today" : ""}`}
      onClick={handleEventClick}
    >
      <Absolute width="100%" m={0} right={0} top={0}>
        <Text
          as="p"
          my={1}
          mt={1}
          fontSize={14}
          p={0}
          textAlign="center"
          color={"gray.9"}
          fontWeight="bold"
        >
          {showDay <= 6 && currentDate.format("ddd")}
        </Text>
      </Absolute>
      <div className="selectable-day--position">
        <span
          className="selectable-day--button"
          style={{ color: color }}
          onClick={handleDateClick}
        >
          <Text
            my={0}
            textAlign={"center"}
            as="p"
            fontSize={14}
            fontWeight="bold"
            color={color}
          >
            {currentDate.format("D")}
          </Text>
        </span>
      </div>
    </div>
  );
}

export default Day;
