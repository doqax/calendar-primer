import React from "react";
// import moment from "moment/min/moment-with-locales";

import CalendarRows from "./CalendarRows";

// moment.updateLocale("fr", {
//   week: {
//     dow: 1,
//   },
// });

function CalendarMonth({ calendar }) {
  return (
    <div className="calendar">
      <table cellSpacing="0">
        <tbody>
          <CalendarRows calendar={calendar} />
        </tbody>
      </table>
    </div>
  );
}

export default CalendarMonth;
