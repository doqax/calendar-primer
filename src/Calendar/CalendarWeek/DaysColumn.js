import React from "react";
import { BorderBox, Text } from "@primer/components";

function DaysColumn() {
  const days = [];
  for (let i = 0; i <= 24; i++) {
    days.push(
      <BorderBox height={50} key={i}>
        <Text as={"p"} mr={2} fontSize={12} textAlign="right">
        </Text>
      </BorderBox>
    );
  }

  return <div className="daysColumn">{days}</div>;
}

export default DaysColumn;
