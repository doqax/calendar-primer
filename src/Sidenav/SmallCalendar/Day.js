import React, { useState } from "react";
import { Text } from "@primer/components";

import "./day.css";

function Day({ day, color, dayColor, date, setCalendarState }) {
  const [countClick, setCountClick] = useState(0);
  
  // function handleOnClick() {
  //   if (countClick === 2) {
  //     setCalendarState((state) => ({
  //       ...state, 
  //       options : {
  //         ...state.options,
  //         selected: "day"
  //       }
  //     }))
  //   } else if (countClick === 3) {
  //     setCalendarState((state) => ({
  //       ...state, 
  //       options : {
  //         ...state.options,
  //         selected: "month"
  //       }
  //     }))
  //   }
  //   setCountClick(countClick + 1);
  // }
  // console.log(countClick);
  return (
    <div
      className={`smallCalendar--day`}
      // onClick={handleOnClick}
    >
      <div className={`smallCalendar--day-zone ${dayColor}`}>
        <Text
          as="p"
          textAlign="center"
          fontWeight={500}
          my={1}
          fontSize={12}
          color={dayColor === "today" ? "white" : color}
        >
          {day}
        </Text>
      </div>
    </div>
  );
}

export default Day;
