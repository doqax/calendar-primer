import dayjs from "dayjs";

function isSelectedWeek(calendarState, day) {
  const { sideCalendarDate, date } = calendarState;
  const { selected } = calendarState.options;
  const weekStartOf = dayjs(sideCalendarDate).startOf("week").format("D");
  const weekEndOf = dayjs(sideCalendarDate).endOf("week").format("D");

  const isSameMonth = dayjs(sideCalendarDate).isSame(date, "month");
  return (
    weekStartOf <= day && weekEndOf >= day && selected === "week" && isSameMonth
  );
}

export default isSelectedWeek;
