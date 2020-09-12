import moment from "moment";
import { holidays } from "../config/holidays";

// inefficient but will be replaced by API

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

export default filterMonthHolidays;
