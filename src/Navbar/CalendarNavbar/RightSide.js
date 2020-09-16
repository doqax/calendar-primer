import React from "react";
import { Box, Button, Dropdown } from "@primer/components";
import { GearIcon } from "@primer/octicons-react";

import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";

function RightSide({ calendar }) {
  const [calendarState, setCalendarState] = calendar;
  const { selected } = calendarState.options;

  return (
    <Box mr={3} ml="auto">
      <Dropdown overlay={true}>
        <Dropdown.Button>{capitalizeFirstLetter(selected)}</Dropdown.Button>
        <Dropdown.Menu direction="sw">
          <Dropdown.Item
            onClick={() => {
              setCalendarState({
                ...calendarState,
                options: {
                  ...calendarState.options,
                  selected: "day",
                },
              });
              document.body.click(); // bug with primer
            }}
          >
            <Box p={1}>Day</Box>
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setCalendarState({
                ...calendarState,
                options: {
                  ...calendarState.options,
                  selected: "week",
                },
              });
              document.body.click(); // bug with primer
            }}
          >
            <Box p={1}>Week</Box>
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setCalendarState({
                ...calendarState,
                options: {
                  ...calendarState.options,
                  selected: "month",
                },
              });
              document.body.click(); // bug with primer
            }}
          >
            <Box p={1}>Month</Box>
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setCalendarState({
                ...calendarState,
                options: {
                  ...calendarState.options,
                  selected: "agenda",
                },
              });
              document.body.click(); // bug with primer
            }}
          >
            <Box p={1}>Agenda</Box>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Button
        ml={3}
        onClick={() => {
          setCalendarState({
            ...calendarState,
            options: {
              ...calendarState.options,
              showSettings: true,
            },
          });
          document.body.click(); // bug with primer
        }}
      >
        <GearIcon />
      </Button>
    </Box>
  );
}

export default RightSide;
