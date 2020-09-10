import React from "react";

import { Box, Text } from "@primer/components";

function Hours() {
  const hours = [];
  for (let i = 0; i <= 24; i++) {
    let formatHours;

    formatHours = i <= 11 ? " AM" : " PM";
    hours.push(
      <Box height={50} key={i}>
        <Text as={"p"} mr={2} fontSize={12} textAlign="right">{i === 0 ? "" : i + formatHours}</Text>
      </Box>
    );
  }
  return (
    <div>
      {hours}
    </div>
  );
}

export default Hours;
