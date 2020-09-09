import React from "react";

import { Flex, Button } from "@primer/components";

function SettingsNavbar({ setSelectedCalendar, selectedCalendar }) {
  return (
    <Flex flexWrap="wrap" alignItems="center" backgroundColor="white">
      <div className="logo"></div>
      <Button
        mx={2}
        onClick={() => {
          const selected = selectedCalendar.selected;
          setSelectedCalendar({ selected, settings: false });
        }}
      >
        Return
      </Button>
      <h3>Settings</h3>
    </Flex>
  );
}

export default SettingsNavbar;
