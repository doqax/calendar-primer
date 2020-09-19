import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { Box, Flex, Text, Button, ButtonGroup, Grid } from "@primer/components";
import { ChevronLeftIcon, ChevronRightIcon } from "@primer/octicons-react";

// utils
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import OneLetterWeekDay from "../../utils/OneLetterWeekDay";

import SideCalendarRows from "./SideCalendarRows";

function SmallCalendar({ calendar }) {
  const [calendarState, setCalendarState] = calendar;
  const { sideCalendarDate, date } = calendarState;
  const [dateSelected, setDateSelected] = useState(dayjs(date)); // used for focus effect on sideDate
  const monthYear = dayjs(sideCalendarDate).format("MMM YYYY");

  useEffect(() => {
    setDateSelected(calendarState.date)
  }, [calendarState]);

  return (
    <Box mt={2} mr={2} ml={3}>
      <Flex>
        <Text as="p" fontWeight="bold">
          {capitalizeFirstLetter(monthYear)}
        </Text>
        <ButtonGroup display="block" mt={2} ml="auto" mr={2}>
          <Button
            onClick={() => {
              const previous = dayjs(sideCalendarDate).subtract(1, "month");
              setCalendarState({
                ...calendarState,
                sideCalendarDate: previous,
              });
            }}
          >
            <ChevronLeftIcon />
          </Button>
          <Button
            onClick={() => {
              const next = dayjs(sideCalendarDate).add(1, "month");
              setCalendarState({
                ...calendarState,
                sideCalendarDate: next,
              });
            }}
          >
            <ChevronRightIcon />
          </Button>
        </ButtonGroup>
      </Flex>
      <Grid
        gridTemplateColumns="repeat(7, auto)"
        height="30px"
        px={3}
        pt={1}
        pb={2}
      >
        <OneLetterWeekDay />
      </Grid>
      <SideCalendarRows
        calendar={calendar}
        sideSelected={[dateSelected, setDateSelected]}
      />
    </Box>
  );
}

export default SmallCalendar;
