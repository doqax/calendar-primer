import React from "react";
import moment from "moment/min/moment-with-locales";

// utils
import isWeekend from "../utils/isWeekend";
import isHoliday from "../utils/isHoliday";

// config
import filterMonthHolidays from "../config/filterMonthHolidays";

import Day from "./Day";

function daysPreviousMonth(firstDay, globalDate) {
  const date = moment(globalDate).subtract(1, "month").startOf("month");
  const countDays = moment(globalDate)
    .startOf("month")
    .subtract(firstDay, "days")
    .format("D");
  const weekDaysShort = moment.weekdaysShort(); // true === european week
  console.log(weekDaysShort);
  const blanks = [];

  const sum = parseInt(countDays) + parseInt(firstDay);
  for (let i = countDays; i < sum; i++) {
    blanks.push(
      <Day
        key={`pm` + i}
        tableStyle={`blanks`}
        dayColor="gray.4"
        day={i}
        header={weekDaysShort[i - countDays]}
        isHoliday={[]} // ${isWeekend(currentDay.isoDay)}
        date={moment(date).add(i - 1, "days")}
      />
    );
  }

  return blanks;
}

function daysInMonth(firstDay, globalDate) {
  const weekDaysShort = moment.weekdaysShort();
  const daysInMonth = moment(globalDate).daysInMonth();
  const currentDay = {
    day: parseInt(moment(globalDate).format("D")),
    isSameDay: moment().isSame(globalDate, "day"),
    todayFormat: moment(globalDate).startOf("month").format("D MMM"),
    isoDay: parseInt(moment(globalDate).startOf("month").format("e")),
  };
  const days = [];
  const holidays = filterMonthHolidays(globalDate);

  for (let i = 1; i <= daysInMonth; i++) {
    if (currentDay.isSameDay && currentDay.day === i) {
      currentDay.className = `today`;
    } else {
      currentDay.className = `currentMonth`;
    }

    days.push(
      <Day
        key={i}
        dayColor={currentDay.className}
        tableStyle={`day-${i} ${currentDay.className}`} // ${isWeekend(currentDay.isoDay)}
        day={i === 1 ? currentDay.todayFormat : i}
        header={firstDay <= 6 ? weekDaysShort[firstDay] : ""}
        isHoliday={isHoliday(holidays, i)}
        date={moment(globalDate)
          .startOf("month")
          .add(i - 1, "days")}
      />
    );
    firstDay++;
    if (currentDay.isoDay !== 6) {
      currentDay.isoDay++;
    } else {
      currentDay.isoDay = 0;
    }
  }

  return days;
}

function daysNextMonth(
  lastDayOfMonth,
  globalDate
) {
  const blanks = [];
  const dayLeft = 7 - lastDayOfMonth;

  for (let i = 1; i < dayLeft; i++) {
    blanks.push(
      <Day
        key={`nm` + i}
        tableStyle={`blanks`}
        dayColor="gray.4"
        day={i}
        isHoliday={[]} // ${isWeekend(currentDay.isoDay)}
        date={moment(globalDate)
          .startOf("month")
          .add(1, "month")
          .add(i - 1, "days")}
      />
    );
  }

  return blanks;
}

function CalendarRows({ globalDate }) {
  const firstDayOfMonth = moment(globalDate).startOf("month").format("d");
  const lastDayOfMonth = moment(globalDate).endOf("month").format("d");

  const totalSlots = [
    ...daysPreviousMonth(firstDayOfMonth, globalDate),
    ...daysInMonth(firstDayOfMonth, globalDate),
    ...daysNextMonth(lastDayOfMonth, globalDate),
  ];
  let rows = [];
  let cells = [];

  totalSlots.forEach((row, i) => {
    if (i % 7 !== 0 || i === 0) {
      cells.push(row);
    } else {
      rows.push(cells);
      cells = [];
      cells.push(row);
    }
    if (i === totalSlots.length - 1) {
      rows.push(cells);
    }
  });

  const CalendarRows = rows.map((d, i) => {
    return <tr key={i}>{d}</tr>;
  });

  return CalendarRows;
}



export default CalendarRows;
