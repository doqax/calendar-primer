import React from "react";
import moment from "moment/min/moment-with-locales";

import Day from "./Day";

function daysPreviousMonth(firstDay, dateObject) {
  const blanks = [];
  const countDays = moment(dateObject)
    .startOf("month")
    .subtract(firstDay, "days")
    .format("D");
  const sum = parseInt(countDays) + parseInt(firstDay);
  for (let i = countDays; i < sum; i++) {
    blanks.push(
      <Day day={i} color={"gray.5"} key={`prevBlanks${i}`} />
    );
  }

  return blanks;
}

// fix bug in week
function daysInMonth(dateObject) {
  const days = [];
  const daysInMonth = moment(dateObject).daysInMonth();
  const currentDay = {
    day: parseInt(moment(dateObject).format("D")),
    isSameDay: moment().isSame(dateObject, "day"),
    todayFormat: moment(dateObject).startOf("month").format("D MMM"),
    isoDay: parseInt(moment(dateObject).startOf("month").format("e")),
  };

  for (let i = 1; i <= daysInMonth; i++) {
    if (currentDay.isSameDay && currentDay.day === i) {
      currentDay.className = `today`;
    } else {
      currentDay.className = `currentMonth`;
    }

    days.push(
      <Day day={i} color={"black"} dayColor={currentDay.className} key={`current${i}`} />
    );
  }

  return days;
}

function daysNextMonth(lastDayOfMonth) {
  const blanks = [];
  const dayLeft = 7 - lastDayOfMonth;

  for (let i = 1; i < dayLeft; i++) {
    blanks.push(
      <Day day={i} color={"gray.5"} key={`nextBlanks${i}`} />
    );
  }

  return blanks;
}

function SmallCalendarRows({ dateObject }) {
  const firstDayOfMonth = moment(dateObject).startOf("month").format("e");
  const lastDayOfMonth = moment(dateObject).endOf("month").format("e");

  const totalSlots = [
    ...daysPreviousMonth(firstDayOfMonth, dateObject),
    ...daysInMonth(dateObject),
    ...daysNextMonth(lastDayOfMonth),
  ];
  return totalSlots;
}

export default SmallCalendarRows;