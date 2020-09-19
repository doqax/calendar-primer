import React from "react";
import { Text } from "@primer/components";
import dayjs from "dayjs";
import "./day.css";

function Day({ calendar, sideSelected, date }) {
  const [calendarState, setCalendarState] = calendar;
  const { today, sideCalendarDate } = calendarState;
  const { selected, prevSelected } = calendarState.options;
  const [dateSelected, setDateSelected] = sideSelected;

  const isSelectedDay = dayjs(dateSelected).isSame(date);
  const isToday = dayjs(today).isSame(date, "day");
  const isCurrentMonth = dayjs(sideCalendarDate).isSame(date, "month");
  const handleOnClick = () => {
    if (
      (isSelectedDay && selected !== "day") ||
      (!isSelectedDay && selected === "day")
    ) {
      const prevNotDay = selected !== "day" ? selected : prevSelected;
      setCalendarState((state) => ({
        ...state,
        date: dayjs(date),
        sideCalendarDate: dayjs(date),
        options: {
          ...state.options,
          selected: "day",
          prevSelected: prevNotDay,
        },
      }));
      setDateSelected(date);
    } else if (isSelectedDay && selected === "day") {
      setCalendarState((state) => ({
        ...state,
        options: {
          ...state.options,
          selected: state.options.prevSelected,
        },
      }));
    } else {
      setCalendarState((state) => ({
        ...state,
        date: dayjs(date),
        sideCalendarDate: dayjs(date),
        options: {
          ...state.options,
        },
      }));
      setDateSelected(date);
    }
  };

  const color = isSelectedDay ? "white" : isToday ? "white" : isCurrentMonth ? "gray.8" : "gray.5";
  return (
    <div className={`smallCalendar--day`}>
      <div
        className={`smallCalendar--day-zone ${isToday ? "today" : ""} ${
          isSelectedDay ? "selected" : ""
        }`}
        onClick={handleOnClick}
      >
        <Text
          as="p"
          textAlign="center"
          fontWeight={500}
          my={1}
          fontSize={12}
          color={color}
        >
          {date.format("D")}
        </Text>
      </div>
    </div>
  );
}

export default Day;
