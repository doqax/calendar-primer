import React from "react";
import { Box } from "@primer/components";

function Hour({ hour, format }) {
  return (
    <div className="calendarWeek--hour" key={hour}>
      <div className="calendarWeek--hour-border"></div>
      <Box height={50}>
        <div className="calendarWeek--hour-text">
          {hour === 0 ? "" : hour + format}
        </div>
      </Box>
    </div>
  );
}

export default Hour;
