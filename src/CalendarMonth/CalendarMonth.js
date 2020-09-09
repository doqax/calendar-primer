import React from "react";
import moment from "moment/min/moment-with-locales";

import { Box } from "@primer/components";

import CalendarRows from "./CalendarRows";

// moment.updateLocale("fr", {
//   week: {
//     dow: 1,
//   },
// });

function CalendarMonth({ globalDate }) {
  return (
    <div className="calendar">
      <Box height={"100%"}>
        <table cellSpacing="0">
          <tbody>
            <CalendarRows
              globalDate={globalDate}
            />
          </tbody>
        </table>
      </Box>
    </div>
  );
}

export default CalendarMonth;
