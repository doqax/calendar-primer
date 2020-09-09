// 1 change return to bool
// 2 add support for other date format

function isWeekend(isoDay) {
  const saturday = 5;
  const sunday = 6;
  if (isoDay === saturday || isoDay === sunday) {
    return "weekend";
  } else {
    return "";
  }
}

export default isWeekend;
