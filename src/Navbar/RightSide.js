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
          setSelectedCalendar({ selected: "agenda" });
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
              setSelectedCalendar({ settings: false, selected: "day" });
              document.body.click();
            }}
          >
            <Box p={1}>Day</Box>
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setSelectedCalendar({ settings: false, selected: "week" });
              document.body.click();
            }}
          >
            <Box p={1}>Week</Box>
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setSelectedCalendar({ settings: false, selected: "month" });
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
          const selected = selectedCalendar.selected;
          setSelectedCalendar({ settings: "settings", selected });
          document.body.click();
        }}
      >
        <GearIcon />
      </Button>
    </Box>
  );
}

export default RightSide;
