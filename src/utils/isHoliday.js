function isHoliday(holidays, day) {
  const isHoliday = holidays.filter((holiday) => {
    if (parseInt(holiday.start) <= day && parseInt(holiday.end) >= day) {
      return holiday;
    }
    return null;
  });

  return isHoliday;
}

export default isHoliday;
