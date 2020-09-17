import React from "react";
import moment from "moment";
import { BorderBox, Text } from "@primer/components";
import DayHeader from "./DayHeader";

function Day({ calendar }) {
  const [calendarState] = calendar;
  const { date } = calendarState;

  const day = moment(date).format("dddd");
  const gmt = moment(date).format("ZZ");
  const dayDate = date;

  return (
    <>
      <BorderBox
        borderRadius={0}
        borderWidth={1}
        borderRightWidth={0}
        borderLeftWidth={0}
        borderTopWidth={0}
        key={"GMT"}
      >
        <Text as="p" fontSize={12} marginTop="84px" marginBottom="0px">
          GMT {gmt.substring(0, gmt.length - 2)}
        </Text>
      </BorderBox>
      <DayHeader day={day} dayDate={dayDate} textAlign={"left"} />
    </>
  );
}

export default Day;
