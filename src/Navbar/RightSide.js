import React from "react";
import { Box, Button, Dropdown } from "@primer/components";
import { GearIcon, ListUnorderedIcon } from "@primer/octicons-react";

import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";

function RightSide({ selectedCalendar, setSelectedCalendar }) {
  return (
    <Box mr={3} ml="auto">
      <Button
        mr={3}
        onClick={() => {
          setSelectedCalendar("agenda");
        }}
      >
        <ListUnorderedIcon />
      </Button>
      <Dropdown overlay={true}>
        <Dropdown.Button>
          {capitalizeFirstLetter(selectedCalendar)}
        </Dropdown.Button>
        <Dropdown.Menu direction="sw">
          <Dropdown.Item
            onClick={() => {
              setSelectedCalendar("day");
              document.body.click();
            }}
          >
            <Box p={1}>Day</Box>
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setSelectedCalendar("week");
              document.body.click();
            }}
          >
            <Box p={1}>Week</Box>
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setSelectedCalendar("month");
              document.body.click();
            }}
          >
            <Box p={1}>Month</Box>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Button ml={3}>
        <GearIcon
          onClick={() => {
            setSelectedCalendar("month");
          }}
        />
      </Button>
    </Box>
  );
}

export default RightSide;
