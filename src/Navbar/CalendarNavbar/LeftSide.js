import React from "react";
import moment from "moment";
import { Box, Button, Link } from "@primer/components";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ThreeBarsIcon,
  MarkGithubIcon,
} from "@primer/octicons-react";

import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";

function weekIsBetweenTwoMonths({ calendar }) {
  const [calendarState] = calendar;
  const { date } = calendarState;
  const weekStartOf = moment(date).startOf("week");
  const weekEndOf = moment(date).endOf("week");

  return moment(weekStartOf).isSame(weekEndOf, "month");
}


function LeftSide({ calendar }) {
  const [calendarState, setCalendarState] = calendar;
  const { selected, showSidenav } = calendarState.options;
  const { date } = calendarState;

  return (
    <>
      <Button
        mx={2}
        onClick={() => {
          setCalendarState({
            ...calendarState,
            options: {
              ...calendarState.options,
              showSidenav: !showSidenav,
            },
          });
        }}
      >
        <ThreeBarsIcon />
      </Button>
      <Link
        ml={[1, 2, 4]}
        mr={2}
        href="https://github.com/doqax/calendar-primer"
      >
        <MarkGithubIcon size={24} />
      </Link>
      <h3>Calendar</h3>
      <Button
        ml={[1, 1, 8]}
        mr={2}
        onClick={() => {
          const today = moment();
          setCalendarState({
            ...calendarState,
            date: today,
            sideCalendarDate: today,
          });
        }}
      >
        Today
      </Button>
      <Box ml={3} mr={1}>
        <Button
          onClick={() => {
            const previous = moment(date).subtract(1, selected);
            setCalendarState({
              ...calendarState,
              date: previous,
              sideCalendarDate: previous,
            });
          }}
        >
          <ChevronLeftIcon />
        </Button>
      </Box>
      <Box mr={3} ml={1}>
        <Button
          onClick={() => {
            const next = moment(date).add(1, selected);
            setCalendarState({
              ...calendarState,
              date: next,
              sideCalendarDate: next,
            });
          }}
        >
          <ChevronRightIcon />
        </Button>
      </Box>
      <Box mr={3} ml={1}>
        <h3>{capitalizeFirstLetter(moment(date).format("MMMM YYYY"))}</h3>
      </Box>
    </>
  );
}

export default LeftSide;
