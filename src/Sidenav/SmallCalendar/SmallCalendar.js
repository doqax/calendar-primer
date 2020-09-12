import React from "react";
import moment from "moment/min/moment-with-locales";
import { Box, Flex, Text, Button, ButtonGroup, Grid } from "@primer/components";
import { ChevronLeftIcon, ChevronRightIcon } from "@primer/octicons-react";

// utils
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import OneLetterWeekDay from "../../utils/OneLetterWeekDay";

import SmallCalendarRows from "./SmallCalendarRows";

function SmallCalendar({ calendar }) {
  const [calendarState, setCalendarState] = calendar;
  const { sideCalendarDate, date } = calendarState;

  const monthYear = moment(sideCalendarDate).format("MMMM YYYY");

  return (
    <Box mt={2} mr={2} ml={3}>
      <Flex>
        <Text as="p" fontWeight="bold">
          {capitalizeFirstLetter(monthYear)}
        </Text>
        <ButtonGroup display="block" mt={2} ml="auto" mr={2}>
          <Button
            onClick={() => {
              const previous = moment(sideCalendarDate).subtract(1, "month");
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
              const next = moment(sideCalendarDate).add(1, "month");
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
        gridTemplateRows="repeat(7, 25px)"
        height="calc(7 * 30px)"
        gridGap={1}
        mx={4}
        pt={1}
      >
        <OneLetterWeekDay />
        <SmallCalendarRows dateObject={sideCalendarDate} />
      </Grid>
    </Box>
  );
}

export default SmallCalendar;
