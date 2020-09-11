import React from "react";

import { Flex, Button, BorderBox } from "@primer/components";
import { ChevronLeftIcon } from "@primer/octicons-react";

function SettingsNavbar({ setSelectedCalendar, selectedCalendar }) {
  return (
    <div className="navbar">
      <BorderBox
        borderRadius={0}
        borderWidth={1}
        borderRightWidth={0}
        borderTopWidth={0}
        borderLeftWidth={0}
        height={"65px"}
      >
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
      </BorderBox>
    </div>
  );
}

export default SettingsNavbar;
