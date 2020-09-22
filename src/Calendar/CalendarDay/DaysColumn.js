import React, { useEffect } from "react";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import HoursBox from "./HoursBox";
import Event from "./Event";

dayjs.extend(isBetween);

function renderEvents(time) {
  const eventTime = dayjs();
  const startOfHour = time.startOf("h");
  const endOfHour = time.endOf("h");
  const isEventHere = dayjs(eventTime).isBetween(startOfHour, endOfHour);
  const test  = isEventHere ? <Event /> : null;

  return test;
}

function DaysColumn({ calendar }) {
  const [calendarState, setCalendarState] = calendar;

  const isSameHour = (i) => {
    if (dayjs(calendarState.date).isSame(calendarState.today, "day")) {
      if (i === parseInt(dayjs(calendarState.today).format("H"))) {
        return calendarState.today;
      }
      return false;
    }

    return false;
  };

  useEffect(() => {
    const updateMinutes = setInterval(() => {
      setCalendarState({
        ...calendarState,
        today: dayjs(),
      });
    }, 60000);
    return () => clearInterval(updateMinutes);
  }, [calendarState, setCalendarState]);

  const days = [];
  for (let i = 0; i <= 23; i++) {
    const currentHour = dayjs(calendarState.date).startOf("day").add(i, "hour");
    days.push(
      <HoursBox
        key={i}
        date={currentHour}
        isSameHour={isSameHour(i)}
      >
        {renderEvents(currentHour)}
      </HoursBox>
    );
  }

  return <div className="daysColumn">{days}</div>;
}

export default DaysColumn;
