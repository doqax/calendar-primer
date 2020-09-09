import React from "react";
import moment from "moment/min/moment-with-locales";
import { Box, Button } from "@primer/components";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ThreeBarsIcon,
} from "@primer/octicons-react";

import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";

function LeftSide({
  globalDate,
  setGlobalDate,
  setSmallCalendarDate,
  selectedCalendar,
  setSelectedCalendar,
}) {
  return (
    <>
      <Button
        mx={2}
        onClick={() => {
          const { settings, selected } = selectedCalendar;
          setSelectedCalendar({ settings, selected, sidenav : !selectedCalendar.sidenav });
        }}
      >
        <ThreeBarsIcon />
      </Button>
      {/* <div className="logo"></div> */}
      <h3>Calendar</h3>
      <Button
        ml={12}
        mr={2}
        onClick={() => {
          const date = moment();
          setGlobalDate(date);
          setSmallCalendarDate(date);
        }}
      >
        Today
      </Button>
      <Box ml={3} mr={1}>
        <Button
          onClick={() => {
            const date = moment(globalDate).subtract(1, "months");
            setGlobalDate(date);
            setSmallCalendarDate(date);
          }}
        >
          <ChevronLeftIcon />
        </Button>
      </Box>
      <Box mr={3} ml={1}>
        <Button
          onClick={() => {
            const date = moment(globalDate).add(1, "months");
            setGlobalDate(date);
            setSmallCalendarDate(date);
          }}
        >
          <ChevronRightIcon />
        </Button>
      </Box>
      <Box mr={3} ml={1}>
        <h3>{capitalizeFirstLetter(moment(globalDate).format("MMMM YYYY"))}</h3>
      </Box>
    </>
  );
}

export default LeftSide;
