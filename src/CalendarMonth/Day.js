import React from "react";
import { Absolute, Text, BorderBox } from "@primer/components";

function Day(props) {

  const triggerDay = (e) => {
    // console.log(selectedDay.date);
  };

  return (
    <td className={props.tableStyle} onClick={triggerDay}>
      <Absolute width="100%" m={0} right={0} top={0}>
        <Text as="p" my={1} fontSize={14} p={0} textAlign="center">
          {props.header}
        </Text>
        <Text
          mt={2}
          mb={1}
          as="p"
          fontSize={14}
          fontWeight="bold"
          textAlign="center"
          color={props.dayColor === "today" ? "blue.4" : "gray.9"}
        >
          {props.day}
        </Text>
        {props.isHoliday.length !== 0 && (
          <BorderBox p={1} mr={1} bg="green.1" borderColor="green.2">
            <Text as="p" px={2} fontSize={14} my={0}>
              {props.isHoliday[0].name}
            </Text>
          </BorderBox>
        )}
      </Absolute>
    </td>
  );
}

export default Day;
