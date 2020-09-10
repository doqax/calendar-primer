import React from "react";
// import moment from "moment/min/moment-with-locales";

import CalendarRows from "./CalendarRows";

// moment.updateLocale("fr", {
//   week: {
//     dow: 1,
//   },
// });

function CalendarMonth({ globalDate }) {
  return (
    <div className="calendar">
        <table cellSpacing="0">
          <tbody>
            <CalendarRows
              globalDate={globalDate}
            />
          </tbody>
        </table>
    </div>
  );
}

export default CalendarMonth;
