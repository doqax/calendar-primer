import moment from "moment";

function isSelectedWeek(calendarState, day) {
  const { sideCalendarDate, date } = calendarState;
  const { selected } = calendarState.options;
  const weekStartOf = moment(sideCalendarDate).startOf("week").format("D");
  const weekEndOf = moment(sideCalendarDate).endOf("week").format("D");

  const isSameMonth = moment(sideCalendarDate).isSame(date, "month");
  return (
    weekStartOf <= day && weekEndOf >= day && selected === "week" && isSameMonth
  );
}

export default isSelectedWeek;
