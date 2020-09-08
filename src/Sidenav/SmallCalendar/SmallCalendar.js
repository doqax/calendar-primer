import React from "react";
import moment from "moment/min/moment-with-locales";
import { Box, Flex, Text, Button, ButtonGroup, Grid } from "@primer/components";
import { ChevronLeftIcon, ChevronRightIcon } from "@primer/octicons-react";

// utils
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import OneLetterWeekDay from "../../utils/OneLetterWeekDay";

import SmallCalendarRows from "./SmallCalendarRows";

function SmallCalendar({ smallCalendarDate, setSmallCalendarDate }) {
  const selectedDate = moment(smallCalendarDate).format("MMMM YYYY");

  return (
    <Box mt={2} mr={2} ml={3}>
      <Flex>
        <Text as="p" fontWeight="bold">
          {capitalizeFirstLetter(selectedDate)}
        </Text>
        <ButtonGroup display="block" mt={2} ml="auto" mr={2}>
          <Button
            onClick={() => {
              const date = moment(smallCalendarDate).subtract(1, "month");
              setSmallCalendarDate(date);
            }}
          >
            <ChevronLeftIcon />
          </Button>
          <Button
            onClick={() => {
              const date = moment(smallCalendarDate).add(1, "month");
              setSmallCalendarDate(date);
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
        <SmallCalendarRows
          dateObject={smallCalendarDate}
        />
      </Grid>
    </Box>
  );
}

export default SmallCalendar;
