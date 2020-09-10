import React from "react";
import { BorderBox, Text } from "@primer/components";

function DaysColumn() {
  const days = [];
  for (let i = 0; i <= 23; i++) {
    days.push(
      <BorderBox
        height={50}
        key={i}
        borderRadius={0}
        borderWidth={1}
        borderTopWidth={1}
        borderBottomWidth={0}
        borderRightWidth={0}
      >
        <Text as={"p"} mr={2} fontSize={12} textAlign="right"></Text>
      </BorderBox>
    );
  }

  return <div className="daysColumn">{days}</div>;
}

export default DaysColumn;
