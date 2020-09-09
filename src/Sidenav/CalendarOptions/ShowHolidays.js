import React, { useState } from "react";

import { Details, Button, Box } from "@primer/components";

function ShowHolidays() {
  const [isWithHolidays, setIsWithHolidays] = useState(true);

  function handleHolidays() {
    setIsWithHolidays(!isWithHolidays);
  }

  return (
    <Details display={"flex"} mx={"30px"}>
      <Button as="summary">Other calendars</Button>
      <Box mt={"16px"}>
        <label>
          <input type="checkbox" checked={isWithHolidays} onChange={handleHolidays} />
          Holidays in Belgium
        </label>
      </Box>
    </Details>
  );
}

export default ShowHolidays;
