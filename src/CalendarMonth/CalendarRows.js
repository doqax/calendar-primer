import React from "react";
import moment from "moment/min/moment-with-locales";
import { holidays } from "../holidays";

import Day from "./Day";

function daysPreviousMonth(firstDay, globalDate) {
  const date = moment(globalDate).subtract(1, "month").startOf("month");
  const countDays = moment(globalDate)
    .startOf("month")
    .subtract(firstDay, "days")
    .format("D");
  const weekDaysShort = moment.weekdays(true); // true === european week
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
        isHoliday={[]}
        date={moment(date).add(i - 1, "days")}
      />
    );
  }

  return blanks;
}

function daysInMonth(firstDay, globalDate) {
  const weekDaysShort = moment.weekdays(true);
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
        tableStyle={`day-${i} ${currentDay.className} ${isWeekend(
          currentDay.isoDay
        )}`}
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
        isHoliday={[]}
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
  const firstDayOfMonth = moment(globalDate).startOf("month").format("e");
  const lastDayOfMonth = moment(globalDate).endOf("month").format("e");

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

function isWeekend(isoDay) {
  const saturday = 5;
  const sunday = 6;
  if (isoDay === saturday || isoDay === sunday) {
    return "weekend";
  } else {
    return "";
  }
}

function filterMonthHolidays(globalDate) {
  const holidaysInCurrentMonth = holidays.filter((holiday) => {
    const fromIsSameMonth = moment(globalDate).isSame(holiday.from, "month");
    const toExist = holiday.to !== undefined;
    let toIsSameMonth = false;

    if (toExist) {
      toIsSameMonth = moment(globalDate).isSame(holiday.to, "month");
    } else {
      toIsSameMonth = moment(globalDate).isSame(holiday.from, "month");
      holiday.to = holiday.from;
    }

    if (fromIsSameMonth) {
      holiday.start = moment(holiday.from).format("D");
      holiday.end = toIsSameMonth
        ? moment(holiday.to).format("D")
        : moment(holiday.from).endOf("month").format("D");
      return holiday;
    } else if (toIsSameMonth) {
      holiday.start = moment(holiday.to).startOf("month").format("D");
      holiday.end = moment(holiday.to).format("D");
      return holiday;
    }

    return null;
  });
  return holidaysInCurrentMonth;
}

function isHoliday(holidays, day) {
  const isHoliday = holidays.filter((holiday) => {
    if (parseInt(holiday.start) <= day && parseInt(holiday.end) >= day) {
      return holiday;
    }
    return null;
  });

  return isHoliday;
}

export default CalendarRows;
