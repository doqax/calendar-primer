import React from "react";
import { BorderBox, Text, Sticky } from "@primer/components";

import dayjs from "dayjs";

function DayHeader({ day, dayDate, calendar }) {
  const [calendarState, setCalendarState] = calendar;

  const handleOnClickDay = () => {
    setCalendarState({
      ...calendarState,
      date: dayDate.clone(),
      sideCalendarDate: dayDate.clone(),
      options: {
        ...calendarState.options,
        selected: "day",
      },
    });
  }

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
          <Text
            as={"p"}
            marginTop={1}
            textAlign={"center"}
            fontSize={14}
            fontWeight={500}
            color={"gray.5"}
          >
            {day.toUpperCase()}
          </Text>
          <div className="dayHeader--day-button" onClick={handleOnClickDay}>
          <Text
            as={"p"}
            marginTop={1}
            textAlign={"center"}
            fontSize={20}
            fontWeight={500}
          >
              {dayjs(dayDate).format("D")}
          </Text>
          </div>
        </Sticky>
      </BorderBox>
    </div>
  );
}

export default DayHeader;
