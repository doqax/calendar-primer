import React from "react";
import { Box, Button, Dropdown } from "@primer/components";
import { GearIcon, ListUnorderedIcon } from "@primer/octicons-react";

import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";

function RightSide({ selectedCalendar, setSelectedCalendar }) {
  return (
    <Box mr={3} ml="auto">
      <Button
        mr={3}
        onClick={() => {
          setSelectedCalendar({
            settings: false,
            selected: "agenda",
            sidenav: selectedCalendar.sidenav,
          });
        }}
      >
        <ListUnorderedIcon />
      </Button>
      <Dropdown overlay={true}>
        <Dropdown.Button>
          {capitalizeFirstLetter(selectedCalendar.selected)}
        </Dropdown.Button>
        <Dropdown.Menu direction="sw">
          <Dropdown.Item
            onClick={() => {
              setSelectedCalendar({
                settings: false,
                selected: "day",
                sidenav: selectedCalendar.sidenav,
              });
              document.body.click();
            }}
          >
            <Box p={1}>Day</Box>
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setSelectedCalendar({
                settings: false,
                selected: "week",
                sidenav: selectedCalendar.sidenav,
              });
              document.body.click();
            }}
          >
            <Box p={1}>Week</Box>
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setSelectedCalendar({
                settings: false,
                selected: "month",
                sidenav: selectedCalendar.sidenav,
              });
              document.body.click();
            }}
          >
            <Box p={1}>Month</Box>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Button
        ml={3}
        onClick={() => {
          setSelectedCalendar({
            settings: "settings",
            selected: selectedCalendar.selected,
            sidenav: selectedCalendar.sidenav,
          });
          document.body.click();
        }}
      >
        <GearIcon />
      </Button>
    </Box>
  );
}

export default RightSide;
