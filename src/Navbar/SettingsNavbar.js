import React from "react";

import { Flex, Button } from "@primer/components";
import { ChevronLeftIcon } from "@primer/octicons-react";

function SettingsNavbar({ setSelectedCalendar, selectedCalendar }) {
  return (
    <div className="navbar">
      <Flex flexWrap="wrap" alignItems="center" backgroundColor="white">
        <Button
          mx={2}
          onClick={() => {
            const selected = selectedCalendar.selected;
            setSelectedCalendar({
              selected,
              settings: false,
              sidenav: selectedCalendar.sidenav,
            });
          }}
        >
          <ChevronLeftIcon />
        </Button>
        <h3>Settings</h3>
      </Flex>
    </div>
  );
}

export default SettingsNavbar;
